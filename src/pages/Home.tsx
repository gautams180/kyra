import React, { useEffect, useState } from "react";
import { Header } from "../components/header";
import axios from "axios";
import { HeaderCards } from "../components/headerCards";
import { ProfileBio } from "../components/profileBio";
import { StatsTable } from "../components/statsTable";

type Props = {};

export const Home = (props: Props) => {
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      setLoading(true);
      try {
        const response1 = await axios.get(
          "https://saas.kyra.com/discovery/creators/5831967/base-data",
          {
            headers: {
              "x-kyra-swagger": "f583305f-9bc3-42dd-a520-8520483cff5a",
            },
          }
        );

        const response2 = await axios.get(
          "https://saas.kyra.com/discovery/creators/5831967/stats-history",
          {
            headers: {
              "x-kyra-swagger": "f583305f-9bc3-42dd-a520-8520483cff5a",
            },
          }
        );

        const base_data = response1.data.data;

        // Convert language and region
        const languageMap: Record<string, string> = { en: "English" };
        const regionMap: Record<string, string> = { US: "United States" };

        if (base_data.tiktok) {
          base_data.tiktok.language = languageMap[base_data.tiktok.language] || base_data.tiktok.language;
          base_data.tiktok.region = regionMap[base_data.tiktok.region] || base_data.tiktok.region;
        }

        const stats_history = response2.data.data;
        
        setProfileData({ ...base_data, predictedFee:response1.data.predictedFee, predictedCpv:response1.data.predictedCpv , ...stats_history });
        
        setLoading(false);
      } catch (error) {
        console.log("ERROR while fetching data....", error);
      }
    };
    fetchProfileData();
  }, []);

  return (
    <div className="w-full h-full p-10">
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <div className="w-full flex flex-col gap-10">
          <Header profileData={profileData} />
          <HeaderCards profileData={profileData} />
          <ProfileBio profileData={profileData} />
          <StatsTable profileData={profileData} />
        </div>
      )}
    </div>
  );
};
