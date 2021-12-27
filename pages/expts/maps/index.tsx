import { Box, Button, Spinner } from "@chakra-ui/react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useRef } from "react";

const ErrorComponent = () => <div>Error</div>;

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <Spinner />;
    case Status.FAILURE:
      return <ErrorComponent />;
    case Status.SUCCESS:
      return <MyMapComponent />;
  }
};

const GoogleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "AIzaSyCNkbaUQ49AeNfiisnATf1UlrDixfyPk40";

const MyApp = () => <Wrapper apiKey={GoogleMapsApiKey} render={render} />;
function MyMapComponent({
  center = { lat: 17.597210530767565, lng: 78.12645797084937 },
  zoom = 15,
}: {
  center?: google.maps.LatLngLiteral;
  zoom?: number;
}) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useRef<google.maps.Map>();
  useEffect(() => {
    if (mapRef.current) {
      map.current = new google.maps.Map(mapRef.current, {
        center,
        zoom,
      });
    }
  }, [center, zoom]);
  return (
    <Box>
      <Box ref={mapRef} id="map" w="full" h="full" minH="2xl" />
      <Box>
        <Button
          onClick={() => {
            const marker = new google.maps.Marker({
              position: { lat: 17.597210530767565, lng: 78.12645797084937 },
              map: map.current,
              icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            });
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }}>
          Add marker
        </Button>
      </Box>
    </Box>
  );
}

export default MyApp;
