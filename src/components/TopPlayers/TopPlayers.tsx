"use client";
import React from "react";
import "./topPlayers.css";
import useFetchScore from "@/api/useFetchScore";

const TopPlayers = ({
  isShown,
  onClose,
}: {
  isShown: boolean;
  onClose: () => void;
}) => {
  const { data, loading } = useFetchScore();

  if (loading) return <p>loading....</p>;
  return (
    <div className="modal" style={{ display: isShown ? "block" : "none" }}>
      <div className="w-60 md:w-80">
        <div className="title-bar">
          <div className="title-bar-text" />
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={onClose} />
          </div>
        </div>
        <div className="window min-h-20 text-center">
          <div className="content p-4">
            <p className="mb-2 font-bold">Top Players</p>
            {!data ? (
              <p>no players</p>
            ) : (
              <div>
                <div className="flex font-semibold mb-4">
                  <div>user</div>
                  <div className="flex-1" />
                  <div>count</div>
                </div>
                {data.map((data) => {
                  return (
                    <div key={data.id} className="flex mb-4">
                      <div>{data.name}</div>
                      <div className="flex-1 border-b border-current border-dotted" />
                      <div>{data.times}</div>
                    </div>
                  );
                })}
              </div>
            )}
            <button onClick={onClose}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPlayers;
