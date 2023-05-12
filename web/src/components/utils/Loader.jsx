import React from "react";

function html() {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>CodePen - Ice Pop Loader</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
      />
      <link rel="stylesheet" href="./style.css" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
      <style>
        :root {
          --color-bg: #ad8fff;
          --animation-duration: 2000ms;
          --animation-stagger: 80ms;
          --hue: 360;
          --delay: 0;
          --hex: #f46a6c;
          --size: 6vw;
        }
  
        * {
          box-sizing: border-box;
        }
  
        body {
          background: var(--color-bg);
          padding: 1rem;
          height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
  
        .loader {
          display: flex;
          align-content: center;
          justify-content: center;
          max-width: 50vw;
        }
  
        /* fun (to me) fact: there was a promotional mr freeze pop for batman & robin in 1997 [https://assets.codepen.io/233661/mr-freeze-promotion-box.jpg] */
        .mr-freeze {
          margin: 0 2.5%;
          position: relative;
          width: var(--size);
          max-height: 80vh;
          aspect-ratio: 1 / 8;
          animation: infinite syrup-displacement var(--animation-duration) ease;
          animation-delay: var(--delay);
          transform-origin: bottom center;
          z-index: 3;
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-width: 0 2px;
  
          /* make the pop liquid with a background gradient */
          background: no-repeat bottom 1rem center / 100% 30%
            linear-gradient(
              hsla(var(--hue), 100%, 50%, 50%),
              hsla(var(--hue), 100%, 60%, 50%)
            );
        }
  
        /* vars for each pop */
        .mr-freeze:nth-child(1) {
          --hue: 360;
          --hex: #f46a6c;
          --delay: calc(var(--animation-stagger) * 1);
        }
  
        .mr-freeze:nth-child(2) {
          --hue: 38;
          --hex: #fbad21;
          --delay: calc(var(--animation-stagger) * 2);
        }
  
        .mr-freeze:nth-child(3) {
          --hue: 48;
          --hex: #f7d445;
          --delay: calc(var(--animation-stagger) * 3);
        }
  
        .mr-freeze:nth-child(4) {
          --hue: 84;
          --hex: #9bcc50;
          --delay: calc(var(--animation-stagger) * 4);
        }
  
        .mr-freeze:nth-child(5) {
          --hue: 194;
          --hex: #3ab9de;
          --delay: calc(var(--animation-stagger) * 5);
        }
  
        .mr-freeze:nth-child(6) {
          --hue: 290;
          --hex: #ac51c0;
          --delay: calc(var(--animation-stagger) * 6);
        }
  
        /* ice pop pseduo element */
        .mr-freeze:before {
          --inset: 10%;
          content: "";
          display: block;
          position: absolute;
          top: var(--inset);
          right: var(--inset);
          bottom: 1.5rem;
          left: var(--inset);
          border: 2px solid var(--hex);
          background: var(--hex);
          border-radius: 20% / 2%;
          pointer-events: none;
          opacity: 0.9;
          animation: infinite pop-da-pop var(--animation-duration) ease;
          animation-delay: var(--delay);
          box-shadow: inset 0.25rem 0.25rem 0.5rem hsla(40, 100%, 50%, 0.3),
            inset -0.25rem -0.25rem 0.5rem hsla(200, 100%, 50%, 0.15);
        }
  
        /* sleeve pseudo element*/
        .mr-freeze:after {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: no-repeat top center / 100% calc(100% - 1rem)
              linear-gradient(
                to right,
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.1) 30%,
                rgba(255, 255, 255, 0.4) 30%,
                rgba(255, 255, 255, 0)
              ),
            no-repeat bottom 1rem center / 100% 2px
              linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.5),
                rgba(255, 255, 255, 0.5)
              ),
            no-repeat bottom center / 100% 1rem
              linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.6),
                rgba(255, 255, 255, 0.4)
              );
          clip-path: polygon(
            0 0,
            100% 0,
            100% 100%,
            87.5% 99%,
            75% 100%,
            62.5% 99%,
            50% 100%,
            37.5% 99%,
            25% 100%,
            12.5% 99%,
            0 100%
          );
        }
  
        /* keyframes are all magic numbers tweaked by eye */
        @keyframes pop-da-pop {
          0%,
          5%,
          95%,
          100% {
            transform: translateY(0);
          }
          40%,
          60% {
            transform: translateY(-50%);
          }
          50% {
            transform: translateY(-48%);
          }
        }
  
        @keyframes syrup-displacement {
          0%,
          100% {
            background-size: 100% 30%;
          }
          15%,
          85% {
            background-size: 100% 32%;
          }
          30%,
          70% {
            background-size: 100% 18%;
          }
          50% {
            background-size: 100% 16%;
          }
        }
      </style>
    </head>
    <body style="background-color: #ad8fff;" >
      <!-- partial:index.partial.html -->
     <h1 style="font-weight: bold; font-size: 50px; text-align: center; font-family:arial; " >Loading...</h1>
      <div style="background-color: #ad8fff; border-color: #ad8fff;  " class="loader">
        <div class="mr-freeze"></div>
        <div class="mr-freeze"></div>
        <div class="mr-freeze"></div>
        <div class="mr-freeze"></div>
        <div class="mr-freeze"></div>
        <div class="mr-freeze"></div>
      </div>
      <!-- partial -->
      <script src="https://codepen.io/dariocorsi/pen/aKEBxW/de198bdaf7bb0bf03ac880d82fdfa5d5.js"></script>
    </body>
  </html>
  `;
}

export default function Loader() {
  return (
    <>
      <div
        style={{ backgroundColor: "#fff", margin: 100, padding: 20 }}
        dangerouslySetInnerHTML={{
          __html: html(),
        }}
      ></div>
    </>
  );
}
