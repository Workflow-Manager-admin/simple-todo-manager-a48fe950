import React from "react";
import styles from "./TodoPageFrame.module.css";

/**
 * PUBLIC_INTERFACE
 * TodoPageFrame - Main frame for the TODO PAGE (Figma Frame ID: 9:680).
 * 
 * The structure, size, and background reference are from the Figma design.
 * 
 * For each Figma child node (IDs: 9:681, 9:682, 9:685, 9:691, 9:697, 9:698), 
 * this component includes a code placeholder referencing the corresponding Figma JSON file
 * (e.g., attachments/figma_9:681.json).
 *
 * When the JSON details for a child are available, replace the placeholder with a real component.
 * 
 * Usage: Place any global children (e.g., overlays) as children to this frame if needed.
 */
export default function TodoPageFrame({ children }) {
  return (
    <div className={styles.frameTodoPage} data-figma-frame="9:680">
      {/* Figma design reference as background; remove or hide after full implementation */}
      <img
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/87d1f6f4-f81b-44ed-82a1-8901c6b4aac7"
        alt="TODO PAGE Frame (Figma Reference)"
        className={styles.frameBackgroundImg}
        width={414}
        height={896}
        draggable={false}
        style={{
          opacity: 0.15,
          pointerEvents: "none",
        }}
      />

      {/* Placeholder for Figma child node 9:681 */}
      <FigmaChildPlaceholder
        figmaId="9:681"
        figmaJsonRef="attachments/figma_9:681.json"
      />
      {/* Placeholder for Figma child node 9:682 */}
      <FigmaChildPlaceholder
        figmaId="9:682"
        figmaJsonRef="attachments/figma_9:682.json"
      />
      {/* Placeholder for Figma child node 9:685 */}
      <FigmaChildPlaceholder
        figmaId="9:685"
        figmaJsonRef="attachments/figma_9:685.json"
      />
      {/* Placeholder for Figma child node 9:691 */}
      <FigmaChildPlaceholder
        figmaId="9:691"
        figmaJsonRef="attachments/figma_9:691.json"
      />
      {/* Placeholder for Figma child node 9:697 */}
      <FigmaChildPlaceholder
        figmaId="9:697"
        figmaJsonRef="attachments/figma_9:697.json"
      />
      {/* Placeholder for Figma child node 9:698 */}
      <FigmaChildPlaceholder
        figmaId="9:698"
        figmaJsonRef="attachments/figma_9:698.json"
      />

      {/* Any global children passed to the frame */}
      {children}
    </div>
  );
}

/**
 * PUBLIC_INTERFACE
 * FigmaChildPlaceholder - Generic placeholder for a Figma child node.
 * 
 * Once the JSON for this child is parsed and component is defined, 
 * replace this with the actual child implementation.
 * References to the original Figma JSON attachment are included for traceability.
 */
function FigmaChildPlaceholder({ figmaId, figmaJsonRef }) {
  return (
    <div
      className={styles.childPlaceholder}
      data-figma-child={figmaId}
      title={`Placeholder for Figma node ${figmaId} (${figmaJsonRef})`}
    >
      {/* 
        TODO: Implement this child node.
        Reference JSON: {figmaJsonRef}
      */}
      <span style={{ fontSize: 10, color: "#aaa" }}>
        Child <b>{figmaId}</b> placeholder
        <br />
        (<code>{figmaJsonRef}</code>)
      </span>
    </div>
  );
}
