// Interactive project selector, injected into #tech-tabs / #project-display.
// Add or edit a project by editing the PROJECTS object below.
(function () {
  var PROJECTS = {
    'embedded-linux': {
      label: 'Embedded Linux',
      title: 'Embedded Linux Bring-Up on Zynq-7000 (Zybo Z7-20)',
      description: 'Brought Linux to life on a bare Zynq SoC — wiring custom FPGA peripherals into the kernel, then pushing the same board onto the network to phone home sensor data to the cloud.',
      tech: ['PetaLinux', 'Zynq-7000', 'AXI GPIO/IIC', 'Device Tree', 'Linux Kernel', 'Ethernet (GEM0)', 'IoT', 'MQTT', 'TLS'],
      achievements: [
        'Integrated custom FPGA fabric peripherals (AXI GPIO, AXI IIC) into PetaLinux via custom device tree overlays (system-user.dtsi) and standard kernel subsystems (sysfs, i2c-dev)',
        'Developed a userspace C library for the SSD1306 OLED from datasheet specifications, implementing command initialization, GDDRAM page addressing, and display buffer rendering over /dev/i2c-1',
        'Extended the board onto Ethernet, publishing BME280 sensor data to the cloud via MQTT/TLS'
      ],
      github: 'https://github.com/brundamarpadaga/petalinux-gpio-i2c'
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
      github: 'https://github.com/brundamarpadaga/TSL2561_freeRTOS_Project'
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
      github: 'https://github.com/brundamarpadaga/Cache-Aware-Accelerator-Design/tree/feature/freertos-dual-core'
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
    display.innerHTML =
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
