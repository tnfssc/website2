import { useEffect, useRef } from "react";
import mapboxgl, { Map } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Box } from "@chakra-ui/react";
import Script from "next/script";
import Head from "next/head";

const accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY!;

type ViewPort = {
  center: [number, number];
  zoom: number;
};

export default function Mapbox() {
  const mapContainer = useRef<HTMLDivElement>();
  const map = useRef<Map>();
  const viewport = useRef<ViewPort>({
    center: [37.7577, -12.4376],
    zoom: 8,
  });

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      accessToken,
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v11",
      ...viewport.current,
    })
      .addControl(new mapboxgl.NavigationControl(), "top-right")
      .addControl(new mapboxgl.ScaleControl())
      // @ts-expect-error
      .addControl(new MapboxDirections({ accessToken }), "top-left");
    // @Documentation: https://github.com/mapbox/mapbox-gl-directions/blob/master/API.md
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      viewport.current.center[0] = map.current!.getCenter().lng;
      viewport.current.center[1] = map.current!.getCenter().lat;
      viewport.current.zoom = map.current!.getZoom();
    });
  });

  return (
    <Box w="80vw" h="60vh">
      <Head>
        <link
          rel="stylesheet"
          href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.css"
          type="text/css"
        />
      </Head>
      <Script
        strategy="beforeInteractive"
        id="mapbox-plugin"
        src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.js"></Script>
      <Box w="80vw" h="60vh" ref={d => (mapContainer.current = d ?? undefined)} className="map-container" />
    </Box>
  );
}
