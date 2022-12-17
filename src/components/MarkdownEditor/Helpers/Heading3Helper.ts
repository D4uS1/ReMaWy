import {CustomHelper} from "../Types/CustomHelper";
import {CustomEditor} from "../Types/CustomEditor";
import {Editor, Element, Transforms} from "slate";
import {HelperUtils} from "../Utils/HelperUtils";
import {KeyboardEvent} from "react";
import {SlateUtils} from "../Utils/SlateUtils";

/**
 * Returns whether the Heading3Element is currently active in the specified editor.
 *
 * @param editor
 */
const active = (editor: CustomEditor): boolean => {
    return HelperUtils.defaultIsActive(editor, 'heading-3');
}

/**
 * Toggles the rendering of the Heading3Element in the specified editor.
 *
 * @param editor
 */
const toggle = (editor: CustomEditor) => {
    HelperUtils.defaultToggleAtRoot(editor, 'heading-3');
}

/**
 * Replaces the default behavior of pressing enter.
 * Always creates a new paragraph instead of creating a new header.
 *
 * @param editor
 * @param event
 */
const onEnter = (editor: CustomEditor, event: KeyboardEvent) => {
    SlateUtils.createRootParagraph(editor)

    // prevent the default slate action from creating a new heading
    event.preventDefault();
}

export const Heading3Helper: CustomHelper = {
    active: active,
    toggle: toggle,
    onEnter: onEnter
}