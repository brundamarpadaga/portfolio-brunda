// Interactive project selector, injected into #tech-tabs / #project-display.
// Add or edit a project by editing the PROJECTS object below.
(function () {
  var PROJECTS = {
    'embedded-linux': {
      label: 'Embedded Linux',
      title: 'Embedded Linux Bring-Up on Zynq-7000 (Zybo Z7-20)',
      description: 'Brought Linux to life on a bare Zynq SoC — wiring custom FPGA peripherals into the kernel, then pushing the same board onto the network to phone home sensor data to the cloud.',
      tech: ['PetaLinux', 'Zynq-7000', 'AXI GPIO/IIC', 'Device Tree', 'Linux Kernel', 'Ethernet (GEM0)', 'MQTT', 'TLS'],
      achievements: [
        'Integrated AXI GPIO & I2C peripherals with custom Linux kernel drivers',
        'Wrote an SSD1306 OLED driver from scratch over I2C',
        'Extended the board onto Ethernet, publishing BME280 sensor data to the cloud via MQTT/TLS'
      ],
      github: 'https://github.com/brundamarpadaga/petalinux-gpio-i2c'
    },
    'freertos': {
      label: 'FreeRTOS',
      title: 'LED Intensity Control with PID Feedback Loop',
      description: 'A closed-loop light show — real-time PID control tuning LED brightness against a light sensor, all orchestrated by FreeRTOS tasks on a MicroBlaze soft core.',
      tech: ['MicroBlaze', 'FreeRTOS', 'TSL2561', 'I2C', 'PID Control', 'PWM', 'C'],
      achievements: [
        'Designed a PID controller for closed-loop light intensity regulation',
        'Wrote a custom I2C driver for the TSL2561 light sensor',
        'Coordinated sensing, control, and PWM output across FreeRTOS tasks'
      ],
      github: 'https://github.com/brundamarpadaga/TSL2561_freeRTOS_Project'
    },
    'android': {
      label: 'Android Development',
      title: 'Smart Transit Display (Android + ESP32 + MQTT)',
      description: 'Real-time bus arrivals, from your phone to a hallway display — an Android app talking to an ESP32 over MQTT.',
      tech: ['Android', 'Jetpack Compose', 'MVVM', 'ESP32', 'MQTT', 'TriMet API', 'Kotlin'],
      achievements: [
        'Built a modern Jetpack Compose UI on an MVVM architecture',
        'Integrated live TriMet transit APIs',
        'Bridged the app to an ESP32 display over MQTT'
      ],
      videos: [
        { label: 'Android App Demo', url: 'https://drive.google.com/file/d/1Z5Jh2yFVg97qg7hc6Y9EohN91Y-WYSE_/view?usp=sharing' },
        { label: 'Full System Demo', url: 'https://drive.google.com/file/d/1pk9ox95_QE1srocVnjjqdXMM_vU92fmp/view?resourcekey' }
      ]
    },
    'computer-org': {
      label: 'Computer Organization',
      title: 'Cache-Aware Accelerator: ACP vs HP0 + HLS Matmul on Zynq-7020',
      description: "Chasing memory bandwidth through the Zynq's PS↔PL fabric — comparing coherent and non-coherent DMA paths, then building a custom HLS matrix-multiply accelerator nearly 5× faster than the ARM core alone.",
      tech: ['Zynq-7020', 'Vitis HLS', 'AXI DMA', 'ACP/HP0', 'ARM Cortex-A9', 'PL310 L2 Cache', 'C'],
      achievements: [
        'Benchmarked coherent (ACP) vs non-coherent (HP0) memory paths — ACP up to 1.9× faster',
        'Designed a two-level tiled HLS matmul kernel reaching a 4.89× speedup over software',
        'Iterated through 4 hardware revisions, fixing DSP/LUT tradeoffs and an AXI race condition'
      ],
      github: 'https://github.com/brundamarpadaga/Cache-Aware-Accelerator-Design'
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
