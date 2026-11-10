// Interactive project selector, injected into #tech-tabs / #project-display.
// Add or edit a project by editing the PROJECTS object below.
(function () {
  var PROJECTS = {
    'embedded-linux': {
      label: 'Embedded Linux',
      title: 'Embedded Linux Bring-Up on Zynq-7000 (Zybo Z7-20)',
      description: 'Bringing Linux up on custom FPGA hardware was the hard part: the I2C controller in the fabric would not appear until I traced it to a missing interrupt connection, and the cloud connection kept failing because the board forgot the time on every boot. The result is a Zybo Z7-20 running PetaLinux that reads a BME280 sensor, shows live readings on an OLED, and publishes them to HiveMQ Cloud over MQTT/TLS.',
      tech: ['PetaLinux', 'Yocto', 'Zynq-7000', 'AXI GPIO/IIC', 'Device Tree', 'Ethernet', 'IoT', 'MQTT', 'TLS', 'C', 'MATLAB'],
      achievements: [
        'Brought up PetaLinux on a Zybo Z7-20, integrating PL peripherals (AXI IIC and GPIO) and debugging device-tree bindings so the standard Linux kernel drivers would probe',
        'Found why the I2C bus never appeared: the AXI IIC interrupt was not wired to the processor in Vivado, so its device-tree node had no interrupts property. Fixed it in the block design and rebuilt',
        'Wrote userspace C over /dev/i2c-1 for an SSD1306 OLED (from the datasheet) and a BME280 sensor, and fixed an integer overflow in the humidity math that pinned readings near 0%',
        'Added an MQTT/TLS client to the Yocto build and diagnosed TLS failures as the board resetting its clock on every boot (no battery-backed RTC), then fixed it by syncing time over NTP when the DHCP lease comes up',
        'Wrote a MATLAB script that subscribes to the HiveMQ topic and plots temperature and humidity live on the desktop'
      ],
      github: 'https://github.com/brundamarpadaga/petalinux-gpio-i2c',
      realWorld: 'Smart-home and industrial IoT nodes work this way: a small Linux board reads sensors, shows status on a display, and reports readings to the cloud. Think of a thermostat, or a monitor watching temperature and humidity in a greenhouse or server room.'
    },
    'freertos': {
      label: 'FreeRTOS',
      title: 'LED Intensity Control with PID Feedback Loop',
      description: 'A closed-loop light show — a PID controller running as a FreeRTOS task on a MicroBlaze soft core reads a TSL2561 light sensor over I2C and PWM-drives an LED until the measured lux locks onto a setpoint, even when the light is blocked. Built as a two-person team: I owned the PID task and the sensor driver, my teammate owned button/switch input handling and the seven-segment display.',
      tech: ['MicroBlaze', 'FreeRTOS', 'Nexys A7', 'TSL2561', 'I2C', 'PID Control', 'PWM', 'C'],
      achievements: [
        'Wrote the TSL2561 I2C driver from the datasheet, handling command-register addressing, sensor calibration, and lux readings',
        'Implemented the PID task with double-precision P, I, and D terms (each individually switchable), taking gain and setpoint updates from the input task over FreeRTOS message queues and driving the LED through PWM',
        'Tuned the loop with a settling delay after each PWM change and verified it locks onto a 40 lux setpoint and recovers after the LED is blocked with plastic',
        'Isolated a faulty sensor by testing it on a Raspberry Pi I2C bus, and shortened task delays so gain changes respond quickly'
      ],
      github: 'https://github.com/brundamarpadaga/TSL2561_freeRTOS_Project',
      realWorld: 'This is how auto-brightness on a phone works: a light sensor feeds a control loop that adjusts the screen so it stays comfortable in any room. The same idea holds stage lights, grow lamps and greenhouse lighting at a steady level.'
    },
    'android': {
      label: 'Android Development',
      title: 'Smart Transit Display (Android + ESP32 + MQTT)',
      description: 'Real-time bus arrivals, from your phone to a hallway display — a team project where an Android app configures an ESP32 transit display over MQTT and plans full trips across Portland. I built the Android app\'s UI: every screen, the destination search, and the trip itinerary view.',
      tech: ['Android', 'Jetpack Compose', 'MVVM', 'Kotlin', 'ESP32', 'IoT', 'MQTT', 'TriMet API', 'Google Places API'],
      achievements: [
        'Built all of the app\'s screens (Setup, Default Mode, Destination Mode) in Jetpack Compose, including line-selection dropdowns and live arrival lists',
        'Implemented the destination search field using Google Places Autocomplete, turning typed places into coordinates for trip planning',
        'Parsed TriMet\'s JSON arrivals data and its older XML trip-planner responses, and formatted them into a readable itinerary of walking, bus, and MAX legs with route, direction, and duration'
      ],
      realWorld: 'Like the arrival boards at bus and train stops, or the live times in a maps app: riders see when the next vehicle comes and how to get there at a glance, without refreshing a phone. An always-on display at home or the office keeps that information in view.',
      videos: [
        { label: 'Android App Demo', url: 'https://drive.google.com/file/d/1Z5Jh2yFVg97qg7hc6Y9EohN91Y-WYSE_/view?usp=sharing' },
        { label: 'Full System Demo', url: 'https://drive.google.com/file/d/1pk9ox95_QE1srocVnjjqdXMM_vU92fmp/view?resourcekey' }
      ]
    },
    'computer-org': {
      label: 'Computer Architecture',
      title: 'Dual-Core AMP Benchmark: HW Accelerator vs SW Matrix Multiply on Zynq-7020',
      description: 'Both ARM cores, one race — Core 0 runs an HLS matmul accelerator under FreeRTOS while Core 1 runs the software baseline bare-metal, with per-core cache counters measured side by side. The accelerator wins by up to 9.4× at N=512.',
      tech: ['Zynq-7020', 'AMP', 'FreeRTOS', 'Vitis HLS', 'ARM Cortex-A9', 'PL310 L2 Cache', 'ACP/HP0', 'C', 'Python'],
      achievements: [
        'Built a dual-core AMP benchmark (FreeRTOS on Core 0, bare-metal on Core 1) measuring a 6.9×–9.4× accelerator speedup across N=32–512',
        'Read per-core ARM CP15 PMU and shared PL310 L2 counters to characterize cache behavior under concurrent dual-core load',
        'Synchronized both cores with an LDREX/STREX inter-core spinlock so they could share one UART without garbled output'
      ],
      github: 'https://github.com/brundamarpadaga/Cache-Aware-Accelerator-Design/tree/feature/freertos-dual-core',
      realWorld: 'Matrix multiplication is the core operation behind AI inference, graphics and signal processing. Benchmarking an FPGA accelerator against the CPU shows when offloading pays off, which is the decision behind accelerators in phones, cameras and data centers.'
    }
  };

  var ORDER = ['embedded-linux', 'freertos', 'android', 'computer-org'];
  var DEFAULT_KEY = 'embedded-linux';

  function linksHtml(p) {
    if (p.github) {
      return '<a href="' + p.github + '" target="_blank" class="github-link">' +
        'View Project on <i class="fa-brands fa-github"></i></a>';
    }
    return p.videos.map(function (v) {
      return '<p><a href="' + v.url + '" target="_blank" class="video-link">📹 ' + v.label + '</a></p>';
    }).join('');
  }

  function renderPanel(key) {
    var p = PROJECTS[key];
    var chips = p.tech.map(function (t) { return '<span class="tech-chip">' + t + '</span>'; }).join('');
    var achievements = p.achievements.map(function (a) { return '<li>' + a + '</li>'; }).join('');
    var display = document.getElementById('project-display');
    var insight = p.realWorld
      ? '<div class="insight">' +
          '<button type="button" class="insight-btn" aria-label="Where is this used in real life?">' +
            '<i class="fa-solid fa-lightbulb" aria-hidden="true"></i></button>' +
          '<div class="insight-tip" role="tooltip"><strong>In real life</strong>' + p.realWorld + '</div>' +
        '</div>'
      : '';
    display.innerHTML =
      insight +
      '<h3>' + p.title + '</h3>' +
      '<p>' + p.description + '</p>' +
      '<div class="tech-stack">' + chips + '</div>' +
      '<p style="margin-top: 15px;"><strong>Key Achievements:</strong></p>' +
      '<ul style="margin-left: 30px; margin-top: 10px;">' + achievements + '</ul>' +
      '<div style="margin-top: 15px;">' + linksHtml(p) + '</div>';
  }

  function selectTab(key) {
    var buttons = document.querySelectorAll('#tech-tabs .tech-tab');
    buttons.forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.project === key);
    });
    renderPanel(key);
  }

  var tabsContainer = document.getElementById('tech-tabs');
  if (tabsContainer) {
    tabsContainer.innerHTML = ORDER.map(function (key) {
      var activeClass = key === DEFAULT_KEY ? ' active' : '';
      return '<button type="button" class="tech-tab' + activeClass + '" data-project="' + key + '">' +
        PROJECTS[key].label + '</button>';
    }).join('');

    tabsContainer.querySelectorAll('.tech-tab').forEach(function (btn) {
      btn.addEventListener('click', function () {
        selectTab(btn.dataset.project);
      });
    });

    renderPanel(DEFAULT_KEY);
  }
})();
