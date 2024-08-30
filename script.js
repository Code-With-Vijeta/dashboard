document.addEventListener("DOMContentLoaded", function () {
  // Common chart options
  const commonOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        callbacks: {
          labelTextColor: function () {
            return "white";
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
      },
    },
    layout: {
      padding: 10,
    },
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
  };

  // Initialize charts
  const charts = [
    {
      id: "barChart1",
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Website Views",
            data: [12, 19, 3, 5, 2, 3, 7],
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            borderColor: "rgba(255, 255, 255, 1)",
            borderWidth: 1,
          },
        ],
      },
    },
    {
      id: "lineChart1",
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Daily Sales",
            data: [10, 20, 15, 25, 30, 40, 35],
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderColor: "rgba(255, 255, 255, 1)",
            borderWidth: 2,
          },
        ],
      },
    },
    {
      id: "barChart2",
      type: "bar",
      data: {
        labels: ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"],
        datasets: [
          {
            label: "Completed Tasks",
            data: [5, 10, 15, 20, 25],
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            borderColor: "rgba(255, 255, 255, 1)",
            borderWidth: 1,
          },
        ],
      },
    },
  ];

  charts.forEach(({ id, type, data }) => {
    const ctx = document.getElementById(id).getContext("2d");
    new Chart(ctx, {
      type,
      data,
      options: commonOptions,
    });
  });
});


// notification popup
const notificationIcon = document.getElementById("notification-icon");
const notificationPopup = document.getElementById("notification-popup");
const closeBtn = document.getElementById("close-btn");

notificationIcon.addEventListener("click", () => {
  notificationPopup.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  notificationPopup.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (
    !notificationPopup.contains(event.target) &&
    event.target !== notificationIcon
  ) {
    notificationPopup.style.display = "none";
  }
});


// sidebar
document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector('.sidebar');
  const sidebarToggle = document.querySelector('.mobile-navbar-toggle');
  console.log('DOM content loaded');
  if (sidebarToggle) {
    console.log('Sidebar toggle button found');
    sidebarToggle.addEventListener('click', function() {
      console.log('Sidebar toggle clicked');
      sidebar.classList.toggle('open');
    });
  } else {
    console.log('Sidebar toggle button not found');
  }
});



// Collapsible sidebar
document.addEventListener("DOMContentLoaded", function () {
  var collapsibles = document.querySelectorAll(".collapsible-toggle");

  collapsibles.forEach(function (toggle) {
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      var parent = this.parentElement;
      var content = parent.querySelector(".collapsible-content");

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        content.style.display = "none";
        this.classList.remove("active");
      } else {
        parent.classList.add("open");
        content.style.display = "block";
        this.classList.add("active");
      }

      collapsibles.forEach(function (otherToggle) {
        if (otherToggle !== toggle) {
          otherToggle.classList.remove("active");
          otherToggle.parentElement.querySelector(".collapsible-content").style.display = "none";
          otherToggle.parentElement.classList.remove("open");
        }
      });
    });
  });
});


//  date picker
document.addEventListener('DOMContentLoaded', function() {
  flatpickr("#datepicker", {
    dateFormat: "Y-m-d",
    enableTime: false,
  });

  flatpickr("#datepicker-year", {
    dateFormat: "Y-m-d",
    enableTime: false,
  });
});


// switches and cities

