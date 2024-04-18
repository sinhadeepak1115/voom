import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { useState, useEffect } from "react";
import { ReactNode } from "react";
import { useUser } from "@clerk/nextjs";
import Loader from "@/components/Loader";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

export const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();
  useEffect(() => {
    if (!isLoaded || !user) return;
    if (!apiKey) {
      throw new Error("No Stream API key provided");
    }
  }, [user, isLoaded]);
  if (!videoClient) return <Loader />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
