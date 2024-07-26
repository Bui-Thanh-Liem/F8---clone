import "./style.scss";

interface IPropBackdrop {
    onClickBackdrop: () => void;
}

export const Backdrop = ({onClickBackdrop}: IPropBackdrop) => {
    return <div className="backdrop" onClick={onClickBackdrop}/>
}