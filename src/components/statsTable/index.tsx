import React from "react";
import { abbreviateNumber, Card } from "../card";
import { Growth } from "../growth";

// type StatsTableProps = {};

export const StatsTable: React.FC<any> = ({ profileData }) => {
  return (
    <div className="w-11/12 mx-auto p-8 rounded-3xl flex flex-row lg:flex-col gap-5 border-[1px] border-gray">
      <div className="flex flex-col lg:flex-row gap-5 items-center lg:justify-between mx-auto lg:m-0">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07"
            />
          </svg>
        </div>
        <div className="flex flex-col lg:flex-row gap-0 items-start w-full">
          <Card
            title="Followers"
            description={abbreviateNumber(profileData?.tiktok?.followersCount)}
            growth={<Growth data="50" />}
          />
          <Card
            title="Average views"
            description={abbreviateNumber(profileData?.tiktok?.followersCount)}
          />
          <Card
            title="Potential sponsored views"
            description={abbreviateNumber(
              profileData?.tiktok?.sponsoredMedianViews
            )}
            cardClass="min-w-fit"
          />
          <Card
            title="Total Likes"
            description={abbreviateNumber(
              profileData?.delta?.likesCount?.absolute
            )}
            growth={<Growth data="50" />}
          />
          <Card
            title="Engagement rate"
            description={`${abbreviateNumber(
              Number((profileData?.tiktok?.engagementRate / 100).toFixed(3))
            )}%`}
          />
          <Card
            title="Total Posts"
            description={abbreviateNumber(
              profileData?.delta?.postsCount?.absolute
            )}
            cardClass=""
            growth={<Growth data="50" />}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 items-center lg:justify-between mx-auto lg:m-0">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M12.7 10c0-1.5-1.2-2.7-2.7-2.7S7.3 8.5 7.3 10s1.2 2.7 2.7 2.7s2.7-1.2 2.7-2.7m1.4 0c0 2.3-1.8 4.1-4.1 4.1S5.9 12.3 5.9 10S7.7 5.9 10 5.9s4.1 1.8 4.1 4.1m1.1-4.3c0 .6-.4 1-1 1s-1-.4-1-1s.4-1 1-1s1 .5 1 1M10 3.4c-1.2 0-3.7-.1-4.7.3c-.7.3-1.3.9-1.5 1.6c-.4 1-.3 3.5-.3 4.7s-.1 3.7.3 4.7c.2.7.8 1.3 1.5 1.5c1 .4 3.6.3 4.7.3s3.7.1 4.7-.3q1.05-.45 1.5-1.5c.4-1.1.3-3.6.3-4.7s.1-3.7-.3-4.7c-.2-.7-.8-1.3-1.5-1.5c-1-.5-3.5-.4-4.7-.4m8 6.6v3.3c0 1.2-.4 2.4-1.3 3.4c-.9.9-2.1 1.3-3.4 1.3H6.7c-1.2 0-2.4-.4-3.4-1.3c-.8-.9-1.3-2.1-1.3-3.4V6.7c0-1.3.5-2.5 1.3-3.4C4.3 2.5 5.5 2 6.7 2h6.6c1.2 0 2.4.4 3.4 1.3c.8.9 1.3 2.1 1.3 3.4z"
            />
          </svg>
        </div>
        <div className="flex flex-col lg:flex-row gap-0 items-start  justify-between w-full">
          <Card
            title="Followers"
            description={abbreviateNumber(profileData?.tiktok?.followersCount)}
            growth={<Growth data="50" />}
          />
          <Card title="Average views" description="" cardClass="gap-5" />
          <Card
            title="Potential sponsored views"
            description={abbreviateNumber(
              profileData?.tiktok?.sponsoredMedianViews
            )}
            cardClass="min-w-fit"
          />
          <Card
            title="Total Likes"
            description={abbreviateNumber(
              profileData?.delta?.likesCount?.absolute
            )}
            growth={<Growth data="50" />}
          />
          <Card
            title="Engagement rate"
            description={`${abbreviateNumber(
              Number((profileData?.tiktok?.engagementRate / 100).toFixed(3))
            )}%`}
          />
          <Card
            title="Total Posts"
            description={abbreviateNumber(
              profileData?.delta?.postsCount?.absolute
            )}
            growth={<Growth data="50" />}
          />
        </div>
      </div>
    </div>
  );
};
