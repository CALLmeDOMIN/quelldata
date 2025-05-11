import Image, { StaticImageData } from "next/image";
import createDatasetScreen from "../../public/dataset-creation-mobile.png";
import featureBuilderScreen from "../../public/add-feature-mobile.png";
import requestsListScreen from "../../public/requests-list-mobile.png";
import exampleImageScreen from "../../public/example-image-mobile.png";
import completedRequestsScreen from "../../public/completed-requests-mobile.png";

type TImageSources = {
  src: StaticImageData;
  alt: string;
};
type TDataContentProps = {
  description: string;
  imageSources: TImageSources[];
};

const DataContent = ({ description, imageSources }: TDataContentProps) => (
  <div className="flex flex-col gap-10">
    <p className="text-xl text-neutral-500 ">{description}</p>
    <div className="overflow-x-auto flex gap-6">
      {imageSources.map((image, index) => (
        <Image
          key={index}
          className="w-auto h-100 object-contain"
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  </div>
);

export default DataContent;

export const BUSINESS_DATA = [
  {
    title: "Create dataset structure",
    content: (
      <DataContent
        description="Choose whether you want to collect image or video data. Specify the
          features you need and provide clear guidelines so contributors know
          exactly how to capture content and label it correctly. Add an example
          entry to show users what a perfect submission looks like."
        imageSources={[
          { src: createDatasetScreen, alt: "create dataset screen" },
          { src: featureBuilderScreen, alt: "create dataset screen" },
        ]}
      />
    ),
  },
  {
    title: "Wait for app users to collect and validate data",
    content: (
      <DataContent
        description=" Once published, your request appears in the marketplace where users
          can join the challenge. Contributors complete tasks by adding images
          or videos, labeling them according to your structure, and validating
          others’ submissions to ensure high dataset quality."
        imageSources={[
          { src: exampleImageScreen, alt: "example image screen" },
          { src: requestsListScreen, alt: "request list screen" },
        ]}
      />
    ),
  },
  {
    title: "Receive Your dataset",
    content: (
      <DataContent
        description="Monitor the status of your dataset in the app dashboard. Once enough
          validated submissions are collected, your complete dataset will be
          ready for download."
        imageSources={[
          { src: completedRequestsScreen, alt: "compelted requests screen" },
        ]}
      />
    ),
  },
];

export const USERS_DATA = [
  {
    title: "Take data challange",
    content: (
      <DataContent
        description="Pick tasks that involve capturing images or videos and labeling them according to clear guidelines. Each task includes examples so you know exactly what’s expected."
        imageSources={[
          { src: createDatasetScreen, alt: "create dataset screen" },
          { src: featureBuilderScreen, alt: "create dataset screen" },
        ]}
      />
    ),
  },
  {
    title: "Collect and validate data",
    content: (
      <DataContent
        description="Submit your entries and review other users’ submissions to ensure accuracy. Community validation ensures fairness and dataset quality.

"
        imageSources={[
          { src: exampleImageScreen, alt: "example image screen" },
          { src: requestsListScreen, alt: "request list screen" },
        ]}
      />
    ),
  },
  {
    title: "Earn rewards in $SOL",
    content: (
      <DataContent
        description="Track your progress and earnings in your dashboard. All rewards are distributed directly through the Solana blockchain."
        imageSources={[
          { src: completedRequestsScreen, alt: "compelted requests screen" },
        ]}
      />
    ),
  },
];
