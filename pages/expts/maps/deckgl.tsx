import { Box } from "@chakra-ui/react";
import { MapView, FirstPersonView } from "@deck.gl/core";
import { LineLayer } from "@deck.gl/layers";
import DeckGL from "@deck.gl/react";
import { useMemo } from "react";
import { StaticMap } from "react-map-gl";
import { MapboxLayer as DeckGLLayer } from "@deck.gl/mapbox";
import { InitialViewStateProps } from "@deck.gl/core/lib/deck";

const INITIAL_VIEW_STATE: InitialViewStateProps = {
  longitude: -95.36403,
  latitude: 29.756433,
  zoom: 19,
  pitch: 0,
  bearing: 0,
};
const data = [{ sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781] }];
export default function DeckGLMap() {
  const layers = useMemo(() => [new LineLayer({ data })], []);
  const views = useMemo(
    () => [
      new MapView({ id: "map", width: "100%", controller: true }),
      new FirstPersonView({ width: "100%", x: "50%", fovy: 50 }),
    ],
    []
  );
  return (
    <Box w="80vw" h="60vh" pos="relative">
      <DeckGL initialViewState={INITIAL_VIEW_STATE} views={views} layers={layers} controller>
        <StaticMap mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY} />
      </DeckGL>
    </Box>
  );
}
