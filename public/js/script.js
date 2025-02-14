document.addEventListener("DOMContentLoaded", function () {
  /** ========== SETUP ELEMENTS ========== **/
  const noButton = document.getElementById("no-button");
  const yesButton = document.getElementById("yes-button");
  const messageDiv = document.querySelector(".message");
  const specialMessageButton = document.getElementById(
    "special-message-button"
  );
  const banner = document.getElementById("banner");
  const container = document.querySelector(".container");

  let i = 1;
  let size = 50;
  let clicks = 0;

  /** ========== NO BUTTON LOGIC ========== **/
  const answers_no = [
    "No",
    "Are you sure?",
    "Are you really sure??",
    "Think again?",
    "Don't believe in second chances?",
    "Why are you being so cold?",
    "Maybe we can talk about it?",
    "I'm not going to ask again!",
    "Ok, now this is hurting my feelings!",
    "You are just being mean!",
    "Why are you doing this to me?",
    "Please give me a chance!",
    "I am begging you to stop!",
    "Ok, Let's just start over..",
  ];

  noButton.addEventListener("click", () => {
    if (clicks === 0) {
      banner.src = "public/images/sad-bubu.gif";
    }
    clicks++;

    // Increase "Yes" button size
    const sizes = [40, 50, 30, 35, 45];
    size += sizes[Math.floor(Math.random() * sizes.length)];
    yesButton.style.height = `${size}px`;
    yesButton.style.width = `${size}px`;

    if (i < answers_no.length - 1) {
      noButton.innerHTML = answers_no[i];
      i++;
    } else {
      alert(answers_no[i]);
      i = 1;
      noButton.innerHTML = answers_no[0];
      yesButton.innerHTML = "Yes";
      yesButton.style.height = "50px";
      yesButton.style.width = "50px";
      size = 50;
    }
  });

  /** ========== YES BUTTON LOGIC ========== **/
  yesButton.addEventListener("click", () => {
    banner.src = "public/images/yes.gif";
    document.querySelector(".buttons").style.display = "none";
    messageDiv.style.display = "block";
    specialMessageButton.style.display = "inline-block";
    spawnHearts();
  });

  /** ========== SPECIAL MESSAGE BUTTON LOGIC ========== **/
  specialMessageButton.addEventListener("click", () => {
    fadeOutAndTransition();
  });

  /** ========== FADE OUT AND TRANSITION TO NEW SCREEN ========== **/
  function fadeOutAndTransition() {
    container.style.opacity = "0";
    setTimeout(() => {
      document.body.innerHTML = `<canvas id="starfield"></canvas>`;
      startStarfield();
    }, 1000);
  }

  /** ========== STARFIELD MESSAGE SCREEN ========== **/
  function startStarfield() {
    const canvas = document.getElementById("starfield");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");

    const stars = 500;
    const colorrange = [0, 60, 240];
    const starArray = [];

    for (let i = 0; i < stars; i++) {
      const x = Math.random() * canvas.offsetWidth;
      const y = Math.random() * canvas.offsetHeight;
      const radius = Math.random() * 1.2;
      const hue = colorrange[Math.floor(Math.random() * colorrange.length)];
      const sat = Math.floor(Math.random() * 50) + 50;
      const opacity = Math.random();
      starArray.push({ x, y, radius, hue, sat, opacity });
    }

    function drawStars() {
      for (let star of starArray) {
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = `hsla(${star.hue}, ${star.sat}%, 88%, ${star.opacity})`;
        context.fill();
      }
    }

    function updateStars() {
      for (let star of starArray) {
        if (Math.random() > 0.99) {
          star.opacity = Math.random();
        }
      }
    }

    const frames = [
      "To my love!",
      "Kahit naiinis ka minsan pag naghihilik ako,ikaw pa rin ang gusto kong katabi sa pagtulog. 😴💖",
      "Kahit minsan mas mabilis ka pang mainis kaysa sa 5G internet,Ikaw pa rin ang laging priority connection ko. 📡💖",
      "Kahit wala akong Spotify Premium, Ikaw pa rin ang laging kanta ng puso ko. 💞",
<<<<<<< HEAD
      "Kahit maging senior citizens na tayo, ako pa rin ang maglalagay ng salonpas sa likod mo. 😆👵👴",
      "Kahit kulubot na tayo at puti na buhok natin, ang pagmamahal ko sa'yo, fresh pa rin parang bagong ligo. 🚿💞",
      "Hindi man tayo perfect, pero parang Jollibee, Langhap-sarap ang love ko sa’yo—panghabambuhay! 🍗💖",
      "Kahit na minsan hindi tayo nagkakaintindihan, mas pipiliin ko pa rin ang buhay na kasama ka",
=======
      "Kahit maging senior citizens na tayo, Ako pa rin ang maglalagay ng salonpas sa likod mo. 😆👵👴",
      "Kahit kulubot na tayo at puti na buhok natin, Ang pagmamahal ko sa'yo, fresh pa rin parang bagong ligo. 🚿💞",
      "Hindi man tayo perfect, pero parang Jollibee, Langhap-sarap ang love ko sa’yo—panghabambuhay! 🍗💖",
      "Kahit na minsan hindi tayo nagkakaintindihan, Mas pipiliin ko pa rin ang buhay na kasama ka",
>>>>>>> 1782ce2481cbda65ca0f33b4c74738834237d2fa
      "Sa lahat ng away-bati natin, lagi pa rin akong babalik sa yakap mo. 🤗❤️",
      "At sa dulo ng lahat, ikaw at ikaw pa rin… Ang forever best decision ko.",
      "Alam kong hindi laging masaya ang bawat araw",
      "May mga oras na magulo, mahirap, at minsan nakakapagod.",
      "Pero kahit sa gitna ng pagod at luha",
      "Ikaw pa rin ang pipiliin kong mahalin—kahapon, ngayon, at sa lahat ng bukas na darating.",
      "Ikaw ang pahinga ko sa gitna ng gulo",
      "Ang init sa bawat paglamig ng mundo",
      "Sa iyo ko natutunan kung paano magmahal nang buo",
      "Kung paano maging masaya sa simpleng bagay, at kung paano maging mas mabuting tao",
      "Sa iyo, natagpuan ko ang tahanan na hindi ko kailanman alam na hinahanap ko.",
      "Wala akong ibang hiling kundi ang makasama ka pa sa maraming taon—hawak ang kamay mo",
      "Kasabay sa paglalakad sa buhay, at patuloy na pipiliin ka sa bawat umaga na gigising ako.",
      "Love",
      "Hanggang panghabambuhay, Mahal kita! 💕",
      "💖 Happy Valentine's Day! 💖",
      "Mwaaa 😘",
    ];

    let frameIndex = 0;
    let opacity = 0;

    function drawText() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawStars();
      updateStars();
      context.fillStyle = `rgba(255, 20, 147, ${opacity})`; // DARK PINK COLOR
      context.font = "30px Comic Sans MS";
      context.textAlign = "center";
      context.fillText(frames[frameIndex], canvas.width / 2, canvas.height / 2);
      if (opacity < 1) opacity += 0.02;
    }

    function nextFrame() {
      if (frameIndex < frames.length - 1) {
        frameIndex++;
        opacity = 0;
      } else {
        showVideo();
      }
    }

    function skipToEnd() {
      frameIndex = frames.length - 1;
      opacity = 1;
      showVideo();
    }

    function draw() {
      drawText();
      requestAnimationFrame(draw);
    }

    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    draw();

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    styleButton(nextButton, "40%");
    document.body.appendChild(nextButton);
    nextButton.addEventListener("click", nextFrame);

    const skipButton = document.createElement("button");
    skipButton.textContent = "Skip";
    styleButton(skipButton, "60%");
    document.body.appendChild(skipButton);
    skipButton.addEventListener("click", skipToEnd);
  }

  function styleButton(button, left) {
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.left = left;
    button.style.padding = "10px 20px";
    button.style.background = "#ff4d6d";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "10px";
    button.style.cursor = "pointer";
  }

  /** ========== SHOW VIDEO AT THE END ========== **/
  function showVideo() {
    document.body.innerHTML = `
        <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: #ffebee;">
          <video width="800" controls autoplay>
            <source src="public/video/valentine-vid.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      `;
  }

  /** ========== HEARTS ANIMATION ========== **/
  function spawnHearts() {
    setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "❤️";
      heart.style.left = Math.random() * window.innerWidth + "px";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 4000);
    }, 500);
  }
});
