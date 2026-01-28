import { css } from "./lib";

export const stFlexyButton = css`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--base-color-ligth-green);
    border-radius: 4px;
    /* padding: clamp(5px, 2.487vw, 10px); */
    padding: 10px;

    &>div {
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        /*
        width: clamp(14px, 5.97vw, 24px);
        height: clamp(14px, 5.97vw, 24px); 
        background-size: contain; */
    }
    &>span {
        color: var(--base-color-ligth-green);
        font-family: "Golos Text", sans-serif;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 18px;
        margin-left: 14px;
        /*
        font-size: clamp(12px, 4.477vw, 18px);
        margin-left: clamp(4px, 3.48vw, 14px); */
    }
`