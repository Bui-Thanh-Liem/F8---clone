interface IPropModalConfirm {
    title: string;
    description: string;
    onClickCancel: () => void;
    onClickOk: () => void;
}

export const ModalConfirm = ({
    title,
    description,
    onClickOk,
    onClickCancel,
}: IPropModalConfirm) => {
    return (
        <div className="modal-confirm">
            <h1 className="modal-confirm-title">{title}</h1>
            <p className="modal-confirm-description">{description}</p>
            <div className="modal-confirm-actions">
                <button className="modal-confirm-actions-cancel" onClick={onClickCancel}>Cancel</button>
                <button className="modal-confirm-actions-ok" onClick={onClickOk}>Ok</button>
            </div>
        </div>
    );
};
