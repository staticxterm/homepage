import React from "react";

export default function Wordmark(props) {
  let stroke = "#000";
  let background = "#fff";
  if (props.stroke !== undefined) {
    stroke = props.stroke;
  }
  if (props.background !== undefined) {
    background = props.background;
  }
  const STYLE = `
    .cls-1,
    .cls-2,
    .cls-4,
    .cls-5,
    .cls-6,
    .cls-7 {
      fill: none;
    }
    .cls-1,
    .cls-2,
    .cls-3,
    .cls-5,
    .cls-7 {
      stroke: ${stroke};
    }
    .cls-1,
    .cls-6,
    .cls-7 {
      stroke-linejoin: round;
    }
    .cls-1 {
      stroke-width: 40px;
    }
    .cls-2,
    .cls-3,
    .cls-4,
    .cls-5 {
      stroke-miterlimit: 10;
    }
    .cls-2,
    .cls-3,
    .cls-5,
    .cls-7 {
      stroke-width: 20px;
    }
    .cls-3 {
      fill: ${background};
    }
    .cls-3,
    .cls-5 {
      stroke-linecap: round;
    }
    .cls-4,
    .cls-6 {
      stroke: ${background};
      stroke-width: 50px;
    }
  `;

  return (
    <svg id="main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width={1920} height={1080} {...props}>
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html: STYLE
          }}
        />
      </defs>
      <title>wordmark</title>
      <path
        id="border"
        className="cls-1"
        d="M750.41,646.28V769.39a14.34,14.34,0,0,0,14.33,14.34h1059.5a14.34,14.34,0,0,0,14.34-14.34V310.61a14.34,14.34,0,0,0-14.34-14.34H767.61a17.2,17.2,0,0,0-17.2,17.21v90.2"
      />
      <title>wordmark</title>
      <path
        id="border"
        className="cls-1"
        d="M750.41,646.28V769.39a14.34,14.34,0,0,0,14.33,14.34h1059.5a14.34,14.34,0,0,0,14.34-14.34V310.61a14.34,14.34,0,0,0-14.34-14.34H767.61a17.2,17.2,0,0,0-17.2,17.21v90.2"
      />
      <g id="lettering">
        <path
          className="cls-2"
          d="M64.59,524.8c0-68.36,54.14-121.12,121.58-121.12S307.75,456.44,307.75,524.8,253.61,645.92,186.17,645.92,64.59,593.16,64.59,524.8Z"
        />
        <path
          className="cls-3"
          d="M346.74,719.79V421.57c0-7.34,4.13-11.47,11.47-11.47h45.88c7.34,0,11.47,4.13,11.47,11.47v10c15.34-17.49,37.66-27.85,68.36-27.85,60.1,0,109.65,52.76,109.65,121.12S544,645.92,483.92,645.92c-30.7,0-53-10.36-68.36-27.85V719.79"
        />
        <path
          className="cls-4"
          d="M869.69,521.8c0,6-.46,10.47-.91,16-.92,7.34-5.51,10.55-12.39,10.55H701.18c6.54,26.12,31.74,43.08,55.65,43.08,12.85,0,25.69-5.59,33.95-12.47,4.59-3.67,8.26-4.42,14.22-4.42h44c8.26,0,11.84,10.5,8.17,17.84-19.14,38.22-54.51,53.56-101.31,53.56-76.16,0-124.79-52.76-124.79-121.12s50.47-121.12,123-121.12C821.06,403.68,869.69,452.52,869.69,521.8Z"
        />
        <path
          className="cls-2"
          d="M869.69,521.8c0,6-.46,10.47-.91,16-.92,7.34-5.51,10.55-12.39,10.55H701.18c6.54,26.12,31.74,43.08,55.65,43.08,12.85,0,25.69-5.59,33.95-12.47,4.59-3.67,8.26-4.42,14.22-4.42h44c8.26,0,11.84,10.5,8.17,17.84-19.14,38.22-54.51,53.56-101.31,53.56-76.16,0-124.79-52.76-124.79-121.12s50.47-121.12,123-121.12C821.06,403.68,869.69,452.52,869.69,521.8Z"
        />
        <path
          className="cls-5"
          d="M907.76,628V421.57c0-7.34,4.13-11.47,11.47-11.47h45.88c7.34,0,11.47,4.13,11.47,11.47v9.49c10.78-15.95,30.31-27.38,59.64-27.38,42.67,0,73.41,33,73.41,90.38V628"
        />
        <path
          className="cls-5"
          d="M1167.88,577.35V421.94c0-7.34,4.13-11.47,11.47-11.47h45.88c7.34,0,11.47,4.13,11.47,11.47v9.36c10.52-15.88,28.8-27.26,52.76-27.26,23.17,0,41.65,9.37,53.2,27.31,14.87-15.91,34-27.31,61.5-27.31h0c45,0,71.12,28.45,71.12,81.21V628.39"
        />
        <path
          className="cls-6"
          d="M1167.88,600.29V554.41a11.48,11.48,0,0,1,11.47-11.47h45.88a11.47,11.47,0,0,1,11.47,11.47v45.88a11.46,11.46,0,0,1-11.47,11.47h-45.88A11.47,11.47,0,0,1,1167.88,600.29Z"
        />
        <path
          className="cls-7"
          d="M1167.88,600.29V554.41a11.48,11.48,0,0,1,11.47-11.47h45.88a11.47,11.47,0,0,1,11.47,11.47v45.88a11.46,11.46,0,0,1-11.47,11.47h-45.88A11.47,11.47,0,0,1,1167.88,600.29Z"
        />
        <path
          className="cls-5"
          d="M1519.77,720.15V421.93c0-7.34,4.13-11.47,11.47-11.47h45.88c7.34,0,11.47,4.13,11.47,11.47v10C1603.93,414.4,1626.25,404,1657,404c60.1,0,109.65,52.76,109.65,121.12S1717.05,646.28,1657,646.28c-30.7,0-53-10.36-68.36-27.85V720.15"
        />
      </g>
    </svg>
  );
}
