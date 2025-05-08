import Image from "next/image";
import createDatasetScreen from "../../public/dataset-creation-mobile.png";
import featureBuilderScreen from "../../public/add-feature-mobile.png";
import requestsListScreen from "../../public/requests-list-mobile.png";
import exampleImageScreen from "../../public/example-image-mobile.png";
import completedRequestsScreen from "../../public/completed-requests-mobile.png";

export const DATA = [
  {
    title: "Create dataset structure",
    content: (
      <div className="flex flex-col gap-10">
        <p className="text-xl text-neutral-500 dark:text-neutral-500 ">
          Choose whether you want to collect image or video data. Specify the
          features you need and provide clear guidelines so contributors know
          exactly how to capture content and label it correctly. Add an example
          entry to show users what a perfect submission looks like.
        </p>
        <div className="flex gap-6">
          <Image
            className="w-auto h-100 object-contain"
            src={createDatasetScreen}
            alt="create dataset screen"
          />
          <Image
            className="w-auto h-100 object-contain"
            src={featureBuilderScreen}
            alt="create dataset screen"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Wait for app users to collect and validate data",
    content: (
      <div className="flex flex-col gap-10">
        <p className="text-xl text-neutral-500 dark:text-neutral-500 ">
          Once published, your request appears in the marketplace where users
          can join the challenge. Contributors complete tasks by adding images
          or videos, labeling them according to your structure, and validating
          others’ submissions to ensure high dataset quality.
        </p>
        <div className="flex gap-6">
          <Image
            className="w-auto h-124 object-contain"
            src={exampleImageScreen}
            alt="example image screen"
          />
          <Image
            className="w-auto h-124 object-contain"
            src={requestsListScreen}
            alt="request list screen"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Receive Your dataset",
    content: (
      <div className="flex flex-col gap-10">
        <p className="text-xl text-neutral-500 dark:text-neutral-500 ">
          Monitor the status of your dataset in the app dashboard. Once enough
          validated submissions are collected, your complete dataset will be
          ready for download.
        </p>
        <div className="flex gap-6">
          <Image
            className="w-auto h-124 object-contain"
            src={completedRequestsScreen}
            alt="compelted requests screen"
          />
        </div>
      </div>
    ),
  },
];
