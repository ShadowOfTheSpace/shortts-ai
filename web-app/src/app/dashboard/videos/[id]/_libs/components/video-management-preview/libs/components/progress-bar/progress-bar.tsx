import { PROGRESS_STATUSES, type VideoDto } from "~/_modules/videos/videos";
import { ProgressElement } from "./libs/components/components";
import {
  progressStatusToDescription,
  progressStatusToIconName,
} from "./libs/maps/maps";

type Properties = {
  currentStatus: VideoDto["status"];
};

const ProgressBar: React.FC<Properties> = ({ currentStatus }) => {
  const progressStatusesWithState = PROGRESS_STATUSES.map((status, index) => {
    const currentStatusIndex = PROGRESS_STATUSES.indexOf(currentStatus);

    let state: "completed" | "current" | "pending";

    if (index < currentStatusIndex) {
      state = "completed";
    } else if (index > currentStatusIndex) {
      state = "pending";
    } else {
      state =
        currentStatusIndex === PROGRESS_STATUSES.length - 1
          ? "completed"
          : "current";
    }

    return {
      statusDescription: progressStatusToDescription[status],
      iconName: progressStatusToIconName[status],
      state,
    };
  });

  return (
    <div className="flex w-full">
      {progressStatusesWithState.map(
        ({ iconName, state, statusDescription }, index) => {
          return (
            <ProgressElement
              key={index}
              state={state}
              statusDescription={statusDescription}
              iconName={iconName}
            />
          );
        }
      )}
    </div>
  );
};

export { ProgressBar };
