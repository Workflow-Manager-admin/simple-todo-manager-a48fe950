import React from "react";
import styles from "./TodoPageFrame.module.css";

/**
 * PUBLIC_INTERFACE
 * TodoPageFrame - Fully implemented TODO PAGE UI per Figma JSON (Frame ID: 9:680).
 *
 * This React component implements the frame and all direct/indirect children found in the Figma JSON and referenced children files.
 * Styles correspond to the Figma design and hierarchical layout. All vector icons are rendered as <img> with Figma URLs.
 *
 * The UI is structured as:
 * - Background layer (9:681)
 * - Top App Bar (9:691)
 * - Status Bar (9:697)
 * - Main task/add button (9:682)
 * - Todos List (9:698)
 * - Navigation Bar (9:685)
 *
 * Each component is placed and styled with absolute/flex layouts for fidelity.
 * Issue: Interactivity is not implemented—purely visual. Replace <img> with SVG/Icon react components in production.
 */

export default function TodoPageFrame({ children }) {
  return (
    <div className={styles.frameTodoPage} data-figma-frame="9:680">
      {/* Background Layer (Rectangle - light purple) */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 414,
          height: 896,
          background: "#d6d7ef",
          zIndex: 1,
        }}
        aria-hidden="true"
      />
      {/* Status Bar */}
      <StatusBar />
      {/* App Bar */}
      <AppBar />
      {/* Add New ToDo Button (Floating Action Button) */}
      <AddNewToDoButton />
      {/* Todos List */}
      <TodosList />
      {/* Bottom Navigation Bar */}
      <NavigationBar />
      {/* Visual reference overlay (for designer comparison; can remove) */}
      <img
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/87d1f6f4-f81b-44ed-82a1-8901c6b4aac7"
        alt="TODO PAGE (Figma Reference)"
        className={styles.frameBackgroundImg}
        width={414}
        height={896}
        draggable={false}
        style={{
          opacity: 0.09,
          pointerEvents: "none",
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: 100,
        }}
      />
      {/* Any children passed into this frame (e.g. overlays) */}
      {children}
    </div>
  );
}

/** Application Bar (Header) */
function AppBar() {
  // Contains a purple header with a white "TODO APP" title and a calendar icon on the right.
  return (
    <div className={styles.appBar} style={{
      position: "absolute", left: 0, top: 0,
      width: 414, height: 118, zIndex: 2,
    }}>
      <div
        style={{
          background: "#9396d3",
          height: "100%",
          width: "100%",
          position: "absolute",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      />
      <span className={styles.titleText}
        style={{
          position: "absolute",
          top: 36, left: 20,
          fontFamily: "sans-serif", fontWeight: 700, fontSize: 32,
          color: "#fff", letterSpacing: 0, lineHeight: "34px",
          zIndex: 2,
        }}
      >
        TODO APP
      </span>
      {/* Calendar icon right side */}
      <img
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b610eef-20eb-4203-9331-6998e85fbde1"
        alt="calendar"
        width={48}
        height={48}
        style={{
          position: "absolute",
          top: 32,
          right: 20,
          zIndex: 2,
        }}
      />
    </div>
  );
}

/** Phone Status Bar (battery/wifi/time) */
function StatusBar() {
  // StatusBar is styled to match iOS-style bars using the Figma-composed image
  return (
    <div style={{
      position: "absolute",
      left: 0,
      top: 0,
      width: 414,
      height: 44,
      zIndex: 10,
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
    }}>
      <img
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ff6c52c-0cc0-4a8f-9431-7bac279e046e"
        alt="Status Bar"
        style={{
          width: "100%",
          height: 44,
          objectFit: "cover",
          opacity: 0.7,
        }}
        draggable={false}
      />
    </div>
  );
}

/** Floating Action Button - Add New ToDo */
function AddNewToDoButton() {
  // Outer circle (purple) with white "+" icon in center
  return (
    <button
      className={styles.fab}
      style={{
        position: "absolute",
        right: 22,
        bottom: 106,
        width: 70,
        height: 70,
        borderRadius: "50%",
        background: "#9396d3",
        border: "none",
        boxShadow: "0 4px 12px rgba(0,0,0,0.13)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 20,
        cursor: "pointer",
        transition: "box-shadow 0.14s",
      }}
      title="Add Todo"
      aria-label="Add Todo"
      tabIndex={0}
    >
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx={16} cy={16} r={16} fill="none" />
        <rect x={14} y={7} width={4} height={18} rx={2} fill="#fff" />
        <rect x={7} y={14} width={18} height={4} rx={2} fill="#fff" />
      </svg>
    </button>
  );
}

/** List of Todo items (Design: group of cards, each with title, subtitle, and three icon buttons) */
function TodosList() {
  // Mimics 5 (static) todo entries for Figma demonstration;
  // IRL: replace with .map over todos.
  const todos = [
    { id: 1, title: "TODO TITLE", subtitle: "TODO SUB TITLE" },
    { id: 2, title: "TODO TITLE", subtitle: "TODO SUB TITLE" },
    { id: 3, title: "TODO TITLE", subtitle: "TODO SUB TITLE" },
    { id: 4, title: "TODO TITLE", subtitle: "TODO SUB TITLE" },
    { id: 5, title: "TODO TITLE", subtitle: "TODO SUB TITLE" },
  ];
  // Vertical scroll is native to the frame (no overlaying)
  return (
    <div className={styles.todosList}
      style={{
        position: "absolute",
        left: 7,
        top: 130,
        width: 400,
        maxHeight: 494,
        zIndex: 3,
        overflowY: "auto",
      }}
    >
      {todos.map((todo, i) => (
        <div key={i} className={styles.todoCard}
          style={{
            width: 400,
            height: 82,
            background: "#fff",
            borderRadius: 15,
            margin: "0 0 16px 0",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.11)",
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Info block */}
          <div
            style={{
              marginLeft: 16,
              flex: 1,
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              zIndex: 2,
            }}
          >
            <span style={{
              fontWeight: 600,
              fontSize: 19,
              color: "#9396d3",
              letterSpacing: 0.5,
              lineHeight: "24px",
            }}>{todo.title}</span>
            <span style={{
              fontWeight: 400,
              fontSize: 14,
              color: "#111",
              opacity: 0.8,
              marginTop: 3,
              lineHeight: "19px",
            }}>{todo.subtitle}</span>
          </div>
          {/* Actions: CheckCircle, Trash, Pencil (edit) */}
          <div
            style={{
              marginRight: 8,
              display: "flex",
              gap: 8,
              alignItems: "center",
            }}
          >
            {/* Complete/Checked button */}
            <IconButton hint="Mark Complete">
              <img
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aecce969-b811-47fd-8495-42f4d49ba530"
                alt="Complete"
                width={25}
                height={25}
                draggable={false}
              />
            </IconButton>
            {/* Trash button */}
            <IconButton hint="Delete">
              <img
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69bb6833-b1bd-4865-b0a9-b11ba5216628"
                alt="Delete"
                width={25}
                height={25}
                draggable={false}
              />
            </IconButton>
            {/* Edit/Pencil */}
            <IconButton hint="Edit">
              <img
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a59bb801-bccc-4872-88e1-15dbb817f28f"
                alt="Edit"
                width={25}
                height={25}
                draggable={false}
              />
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
}

function IconButton({ children, hint }) {
  return (
    <button
      className={styles.iconBtn}
      title={hint}
      tabIndex={0}
      type="button"
      style={{
        border: "none",
        background: "transparent",
        padding: 0,
        borderRadius: 8,
        width: 29, height: 29,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "background 0.14s",
      }}
    >
      {children}
    </button>
  );
}

/** Bottom Navigation Bar (contains line/playlist, tick, and text buttons) */
function NavigationBar() {
  return (
    <nav
      className={styles.navigationBar}
      style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        width: 414,
        height: 68,
        background: "#fff",
        boxShadow: "0px -3px 12px rgba(0, 0, 0, 0.12)",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        padding: "0 44px 0 34px",
      }}
    >
      {/* Playlist Icon */}
      <img
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a720ea00-3fe9-4834-bebf-5655f7df5c91"
        alt="Playlist"
        width={30}
        height={30}
        style={{ marginRight: 10 }}
      />
      {/* "All" label, color primary */}
      <span style={{
        fontWeight: 600,
        color: "#9396d3",
        fontSize: 17,
        marginRight: 40,
      }}>
        All
      </span>
      {/* Tick icon */}
      <img
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3582eaf-8a03-4af4-bcf9-f3cad28d21c1"
        alt="Completed"
        width={30}
        height={30}
      />
      {/* "Completed" label, color secondary */}
      <span style={{
        fontWeight: 500,
        color: "#8b8686",
        fontSize: 15,
        marginLeft: 2,
      }}>
        Completed
      </span>
    </nav>
  );
}
