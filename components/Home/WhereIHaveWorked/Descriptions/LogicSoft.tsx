import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function LogicSoft() {
  const tasks = [
    {
      text: "Built and trained a Machine Learning model that is used to detect faces of interview candidates to identify if they have attended to the interview previously.",
      keywords: ["Machine Learning", "Tensorflow 2.0", "Keras", "Scikit Learn"],
    },
    {
      text: "Implemented the application backend rest api for web.",
      keywords: ["Node.js", "PostgreSql"],
    },
    {
      text: "Implemented website design and enhanced interactivity.",
      keywords: ["Tailwind CSS", "TypeScript"],
    },
    {
      text: "Tested and Deployed it on a realtime server using CI/CD pipeline",
      keywords: ["GitHub Action CI/CD", "Docker"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer <span className="text-AAsecondary">@ Machine Learning</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Jan 2023 - May 2023</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.logicsoftbd.com/", "_blank")}
          >
            www.logicsoftbd.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
