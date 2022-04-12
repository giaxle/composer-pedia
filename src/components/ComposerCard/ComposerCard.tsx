import React, { Dispatch, SetStateAction } from "react";
import style from "./composercard.module.scss";

interface Composer {
  birth: string;
  complete_name: string;
  death: string;
  epoch: string;
  id: number;
  name: string;
  portrait: string;
}

interface Props {
  composer: Composer;
  setSelectedComposer: Dispatch<SetStateAction<any>>;
}

const ComposerCard: React.FC<Props> = ({ composer, setSelectedComposer }) => {
  return (
    <div className={style.composerCard}>
      <img src={composer.portrait} alt={composer.portrait} />
      <div className={style.composerCardInfo}>
        <div>{composer.complete_name}</div>
        <div>{composer.epoch}</div>
      </div>

      <button
        onClick={() => {
          setSelectedComposer(composer);
        }}
      >
        Learn More
      </button>
    </div>
  );
};

export default ComposerCard;
