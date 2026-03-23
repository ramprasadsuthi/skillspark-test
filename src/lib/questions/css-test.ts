import { type Question } from "../questions";

export const cssQuestions: Record<string, Question[]> = {
  "CSS-Beginner": [
  { id: 1, question: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"], correctAnswer: 1, explanation: "CSS stands for Cascading Style Sheets.", type: "conceptual" },

  { id: 2, question: "Which property is used to change text color?", options: ["font-color", "bgcolor", "color", "text-color"], correctAnswer: 2, explanation: "color property sets text color.", type: "mcq" },

  { id: 3, question: "Which property sets background color?", options: ["color", "background", "bgcolor", "background-color"], correctAnswer: 3, explanation: "background-color sets background.", type: "mcq" },

  { id: 4, question: "Which property controls font size?", options: ["font-size", "size", "text-size", "font"], correctAnswer: 0, explanation: "font-size controls size.", type: "mcq" },

  { id: 5, question: "Which property is used to change font style?", options: ["text-style", "font-style", "font-weight", "style"], correctAnswer: 1, explanation: "font-style sets italic/normal.", type: "mcq" },

  { id: 6, question: "Which property is used to make text bold?", options: ["font-style", "text-bold", "font-weight", "bold"], correctAnswer: 2, explanation: "font-weight makes text bold.", type: "mcq" },

  { id: 7, question: "Which selector selects all elements?", options: ["#", "all", "*", "."], correctAnswer: 2, explanation: "* selects all elements.", type: "mcq" },

  { id: 8, question: "Which selector selects by id?", options: ["id", ".", "#", "*"], correctAnswer: 2, explanation: "# selects id.", type: "mcq" },

  { id: 9, question: "Which selector selects by class?", options: ["*", "#", "class", "."], correctAnswer: 3, explanation: ". selects class.", type: "mcq" },

  { id: 10, question: "Which property controls text alignment?", options: ["font-align", "align", "text-align", "text-position"], correctAnswer: 2, explanation: "text-align aligns text.", type: "mcq" },

  { id: 11, question: "Which property sets border?", options: ["frame", "outline", "border", "line"], correctAnswer: 2, explanation: "border defines element border.", type: "mcq" },

  { id: 12, question: "Which property sets margin?", options: ["gap", "margin", "space", "padding"], correctAnswer: 1, explanation: "margin sets outer spacing.", type: "mcq" },

  { id: 13, question: "Which property sets padding?", options: ["padding", "gap", "margin", "space"], correctAnswer: 0, explanation: "padding sets inner spacing.", type: "mcq" },

  { id: 14, question: "Which property changes background image?", options: ["background", "bg-image", "background-image", "image"], correctAnswer: 2, explanation: "background-image sets image.", type: "mcq" },

  { id: 15, question: "Which property repeats background image?", options: ["image-repeat", "background-repeat", "repeat", "bg-repeat"], correctAnswer: 1, explanation: "background-repeat controls repetition.", type: "mcq" },

  { id: 16, question: "Which property sets element width?", options: ["size", "width", "length", "w"], correctAnswer: 1, explanation: "width sets element width.", type: "mcq" },

  { id: 17, question: "Which property sets element height?", options: ["h", "length", "height", "size"], correctAnswer: 2, explanation: "height sets element height.", type: "mcq" },

  { id: 18, question: "Which property controls display type?", options: ["layout", "show", "position", "display"], correctAnswer: 3, explanation: "display defines layout behavior.", type: "mcq" },

  { id: 19, question: "Which value makes element hidden?", options: ["none", "visibility:none", "display:none", "hidden"], correctAnswer: 2, explanation: "display:none hides element.", type: "mcq" },

  { id: 20, question: "Which property controls visibility?", options: ["hide", "visibility", "show", "display"], correctAnswer: 1, explanation: "visibility controls visibility.", type: "mcq" },

  { id: 21, question: "Which property positions element?", options: ["place", "layout", "position", "align"], correctAnswer: 2, explanation: "position defines placement.", type: "mcq" },

  { id: 22, question: "Which value makes element fixed?", options: ["absolute", "relative", "fixed", "static"], correctAnswer: 2, explanation: "fixed positions relative to viewport.", type: "mcq" },

  { id: 23, question: "Which property floats element?", options: ["wrap", "float", "align", "position"], correctAnswer: 1, explanation: "float positions element.", type: "mcq" },

  { id: 24, question: "Which property clears float?", options: ["overflow", "clear", "remove", "float"], correctAnswer: 1, explanation: "clear removes float effect.", type: "mcq" },

  { id: 25, question: "Which property sets text decoration?", options: ["decoration", "text-decoration", "font-style", "style"], correctAnswer: 1, explanation: "text-decoration controls underline.", type: "mcq" },

  { id: 26, question: "Which property sets line spacing?", options: ["gap", "text-spacing", "line-height", "spacing"], correctAnswer: 2, explanation: "line-height controls spacing.", type: "mcq" },

  { id: 27, question: "Which property controls letter spacing?", options: ["spacing", "font-spacing", "letter-spacing", "text-spacing"], correctAnswer: 2, explanation: "letter-spacing adjusts spacing.", type: "mcq" },

  { id: 28, question: "Which property sets font family?", options: ["font-family", "font", "family", "text-font"], correctAnswer: 0, explanation: "font-family defines font.", type: "mcq" },

  { id: 29, question: "Which property controls overflow?", options: ["clip", "overflow", "flow", "wrap"], correctAnswer: 1, explanation: "overflow handles extra content.", type: "mcq" },

  { id: 30, question: "Which value hides overflow content?", options: ["clip", "none", "hidden", "hide"], correctAnswer: 2, explanation: "overflow:hidden hides content.", type: "mcq" },

  { id: 31, question: "Which property controls z-order?", options: ["layer", "index", "z-index", "position"], correctAnswer: 2, explanation: "z-index controls stacking.", type: "mcq" },

  { id: 32, question: "Which unit is relative?", options: ["px", "cm", "em", "pt"], correctAnswer: 2, explanation: "em is relative unit.", type: "mcq" },

  { id: 33, question: "Which unit is absolute?", options: ["em", "rem", "px", "%"], correctAnswer: 2, explanation: "px is fixed unit.", type: "mcq" },

  { id: 34, question: "Which property creates shadow?", options: ["text-shadow", "shadow", "box-shadow", "Both b & c"], correctAnswer: 3, explanation: "Both shadows exist.", type: "mcq" },

  { id: 35, question: "Which property sets opacity?", options: ["alpha", "transparent", "visibility", "opacity"], correctAnswer: 3, explanation: "opacity controls transparency.", type: "mcq" },

  { id: 36, question: "Which property creates rounded corners?", options: ["corner", "radius", "border-radius", "round"], correctAnswer: 2, explanation: "border-radius rounds corners.", type: "mcq" },

  { id: 37, question: "Which property controls cursor style?", options: ["pointer", "mouse", "cursor", "hover"], correctAnswer: 2, explanation: "cursor changes pointer.", type: "mcq" },

  { id: 38, question: "Which pseudo-class applies on hover?", options: [":active", ":focus", ":hover", ":visited"], correctAnswer: 2, explanation: ":hover triggers on mouse over.", type: "mcq" },

  { id: 39, question: "Which pseudo-class applies on click?", options: [":hover", ":visited", ":focus", ":active"], correctAnswer: 3, explanation: ":active applies on click.", type: "mcq" },

  { id: 40, question: "Which property sets list style?", options: ["list-type", "bullet", "list-style", "style"], correctAnswer: 2, explanation: "list-style controls list.", type: "mcq" },

  { id: 41, question: "Which value removes list bullets?", options: ["remove", "hidden", "none", "no-style"], correctAnswer: 2, explanation: "none removes bullets.", type: "mcq" },

  { id: 42, question: "Which property controls table borders?", options: ["border", "collapse", "table-border", "border-collapse"], correctAnswer: 3, explanation: "border-collapse merges borders.", type: "mcq" },

  { id: 43, question: "Which property sets background position?", options: ["align", "position", "bg-pos", "background-position"], correctAnswer: 3, explanation: "background-position aligns image.", type: "mcq" },

  { id: 44, question: "Which property controls word spacing?", options: ["text-spacing", "spacing", "word-spacing", "letter-spacing"], correctAnswer: 2, explanation: "word-spacing adjusts spacing.", type: "mcq" },

  { id: 45, question: "Which property makes element flexible?", options: ["flex", "layout", "display:flex", "flexbox"], correctAnswer: 2, explanation: "display:flex enables flexbox.", type: "mcq" },

  { id: 46, question: "Which property aligns items in flex?", options: ["justify-content", "flex-align", "align-items", "align"], correctAnswer: 2, explanation: "align-items aligns vertically.", type: "mcq" },

  { id: 47, question: "Which property distributes space in flex?", options: ["align-items", "space", "flex", "justify-content"], correctAnswer: 3, explanation: "justify-content distributes space.", type: "mcq" },

  { id: 48, question: "Which property controls grid layout?", options: ["grid", "layout-grid", "display:grid", "gridbox"], correctAnswer: 2, explanation: "display:grid enables grid.", type: "mcq" },

  { id: 49, question: "Which property sets grid columns?", options: ["columns", "grid-col", "grid-template-columns", "grid-columns"], correctAnswer: 2, explanation: "Defines columns.", type: "mcq" },

  { id: 50, question: "Which property sets grid rows?", options: ["rows", "grid-row", "grid-template-rows", "grid-rows"], correctAnswer: 2, explanation: "Defines rows.", type: "mcq" }
],
  "CSS-Intermediate": [
  { id: 1, question: "Which property is used to control the stacking order of elements?", options: ["position", "z-index", "layer", "order"], correctAnswer: 1, explanation: "z-index controls stacking order.", type: "mcq" },

  { id: 2, question: "Which value of position places element relative to nearest positioned ancestor?", options: ["fixed", "absolute", "relative", "static"], correctAnswer: 1, explanation: "absolute positions relative to nearest ancestor.", type: "mcq" },

  { id: 3, question: "Which property is used to create flexible layouts?", options: ["grid", "display:flex", "inline-block", "float"], correctAnswer: 1, explanation: "display:flex enables flexbox.", type: "conceptual" },

  { id: 4, question: "Which property defines direction of flex items?", options: ["flex-wrap", "flex-direction", "justify-content", "align-items"], correctAnswer: 1, explanation: "flex-direction sets row/column.", type: "mcq" },

  { id: 5, question: "Which property allows wrapping of flex items?", options: ["flex-flow", "flex-wrap", "wrap", "overflow"], correctAnswer: 1, explanation: "flex-wrap controls wrapping.", type: "mcq" },

  { id: 6, question: "Which property aligns items horizontally in flex?", options: ["align-items", "justify-content", "align-content", "flex-align"], correctAnswer: 1, explanation: "justify-content aligns horizontally.", type: "mcq" },

  { id: 7, question: "Which property aligns items vertically in flex?", options: ["align-items", "justify-content", "flex-align", "align-content"], correctAnswer: 0, explanation: "align-items aligns vertically.", type: "mcq" },

  { id: 8, question: "Which property is shorthand for flex-direction and flex-wrap?", options: ["flex-box", "flex-flow", "flex-wrap", "flex-all"], correctAnswer: 1, explanation: "flex-flow combines direction and wrap.", type: "mcq" },

  { id: 9, question: "Which property defines grid layout?", options: ["display:grid", "grid-layout", "layout-grid", "grid"], correctAnswer: 0, explanation: "display:grid enables grid.", type: "mcq" },

  { id: 10, question: "Which property defines columns in grid?", options: ["grid-template-columns", "grid-columns", "columns", "grid-col"], correctAnswer: 0, explanation: "Defines column sizes.", type: "mcq" },

  { id: 11, question: "Which property defines rows in grid?", options: ["grid-rows", "grid-template-rows", "rows", "grid-row"], correctAnswer: 1, explanation: "Defines row sizes.", type: "mcq" },

  { id: 12, question: "Which property sets gap between grid items?", options: ["gap", "spacing", "grid-gap", "Both a & c"], correctAnswer: 3, explanation: "gap/grid-gap sets spacing.", type: "mcq" },

  { id: 13, question: "Which property controls element overflow scrolling?", options: ["overflow", "scroll", "overflow-y", "overflow-x"], correctAnswer: 0, explanation: "overflow handles scrolling.", type: "mcq" },

  { id: 14, question: "Which value makes overflow scroll always visible?", options: ["auto", "hidden", "scroll", "visible"], correctAnswer: 2, explanation: "scroll forces scrollbar.", type: "mcq" },

  { id: 15, question: "Which property controls box sizing model?", options: ["box-sizing", "size", "layout", "model"], correctAnswer: 0, explanation: "box-sizing controls border-box/content-box.", type: "conceptual" },

  { id: 16, question: "Which value includes padding and border in width?", options: ["border-box", "content-box", "box", "full-box"], correctAnswer: 0, explanation: "border-box includes padding & border.", type: "mcq" },

  { id: 17, question: "Which property creates CSS transitions?", options: ["transition", "animation", "transform", "effect"], correctAnswer: 0, explanation: "transition adds smooth changes.", type: "mcq" },

  { id: 18, question: "Which property defines transition duration?", options: ["transition-delay", "transition-time", "transition-duration", "duration"], correctAnswer: 2, explanation: "Defines duration of transition.", type: "mcq" },

  { id: 19, question: "Which property is used to scale elements?", options: ["scale()", "transform", "resize", "zoom"], correctAnswer: 1, explanation: "transform applies scale, rotate etc.", type: "conceptual" },

  { id: 20, question: "Which function rotates element?", options: ["rotate()", "spin()", "turn()", "transform()"], correctAnswer: 0, explanation: "rotate() rotates element.", type: "mcq" },

  { id: 21, question: "Which property creates CSS animation?", options: ["animation", "transition", "transform", "motion"], correctAnswer: 0, explanation: "animation defines keyframes.", type: "mcq" },

  { id: 22, question: "Which rule defines animation steps?", options: ["@animation", "@frames", "@keyframes", "@transition"], correctAnswer: 2, explanation: "@keyframes defines animation.", type: "mcq" },

  { id: 23, question: "Which property defines animation duration?", options: ["animation-delay", "animation-duration", "duration", "animation-time"], correctAnswer: 1, explanation: "Defines animation length.", type: "mcq" },

  { id: 24, question: "Which pseudo-class selects first child?", options: [":first-child", ":first", ":child", ":nth-child(1)"], correctAnswer: 0, explanation: ":first-child selects first element.", type: "mcq" },

  { id: 25, question: "Which pseudo-class selects last child?", options: [":last", ":last-child", ":end", ":nth-last"], correctAnswer: 1, explanation: ":last-child selects last.", type: "mcq" },

  { id: 26, question: "Which pseudo-class selects nth element?", options: [":nth-child()", ":child()", ":nth()", ":select()"], correctAnswer: 0, explanation: "Selects specific index.", type: "mcq" },

  { id: 27, question: "Which pseudo-element targets first letter?", options: ["::first-letter", ":first-letter", "::letter", ":letter"], correctAnswer: 0, explanation: "::first-letter styles first letter.", type: "mcq" },

  { id: 28, question: "Which pseudo-element targets first line?", options: [":first-line", "::first-line", "::line", ":line"], correctAnswer: 1, explanation: "::first-line styles first line.", type: "mcq" },

  { id: 29, question: "Which property sets shadow for text?", options: ["text-shadow", "shadow", "font-shadow", "box-shadow"], correctAnswer: 0, explanation: "text-shadow adds shadow.", type: "mcq" },

  { id: 30, question: "Which property sets multiple backgrounds?", options: ["background", "backgrounds", "multi-bg", "background-image"], correctAnswer: 0, explanation: "background supports multiple values.", type: "mcq" },

  { id: 31, question: "Which property defines opacity?", options: ["opacity", "alpha", "visibility", "transparent"], correctAnswer: 0, explanation: "opacity controls transparency.", type: "mcq" },

  { id: 32, question: "Which property clips content?", options: ["clip", "overflow", "mask", "hide"], correctAnswer: 0, explanation: "clip defines visible region.", type: "mcq" },

  { id: 33, question: "Which property is used for media queries?", options: ["@media", "@screen", "@responsive", "@query"], correctAnswer: 0, explanation: "@media enables responsiveness.", type: "conceptual" },

  { id: 34, question: "Which keyword targets max width in media query?", options: ["max-width", "width-max", "limit-width", "screen-max"], correctAnswer: 0, explanation: "max-width defines upper limit.", type: "mcq" },

  { id: 35, question: "Which keyword targets min width?", options: ["min-width", "width-min", "screen-min", "limit"], correctAnswer: 0, explanation: "min-width defines lower limit.", type: "mcq" },

  { id: 36, question: "Which property defines column count?", options: ["column-count", "columns", "col-count", "count"], correctAnswer: 0, explanation: "Defines number of columns.", type: "mcq" },

  { id: 37, question: "Which property sets column gap?", options: ["column-gap", "gap", "col-gap", "spacing"], correctAnswer: 0, explanation: "column-gap sets spacing.", type: "mcq" },

  { id: 38, question: "Which property resizes element?", options: ["resize", "scale", "transform", "zoom"], correctAnswer: 0, explanation: "resize allows resizing.", type: "mcq" },

  { id: 39, question: "Which property defines cursor pointer?", options: ["cursor:pointer", "cursor:hand", "pointer", "mouse:pointer"], correctAnswer: 0, explanation: "cursor:pointer changes cursor.", type: "mcq" },

  { id: 40, question: "Which property controls white space?", options: ["white-space", "text-wrap", "space", "wrap"], correctAnswer: 0, explanation: "white-space controls text wrapping.", type: "mcq" },

  { id: 41, question: "Which value prevents wrapping?", options: ["nowrap", "no-wrap", "none", "wrap"], correctAnswer: 0, explanation: "nowrap prevents wrapping.", type: "mcq" },

  { id: 42, question: "Which property defines object fit?", options: ["object-fit", "fit", "image-fit", "resize"], correctAnswer: 0, explanation: "object-fit controls image fit.", type: "mcq" },

  { id: 43, question: "Which value maintains aspect ratio?", options: ["cover", "contain", "fill", "scale"], correctAnswer: 1, explanation: "contain keeps aspect ratio.", type: "mcq" },

  { id: 44, question: "Which property defines visibility?", options: ["visibility", "display", "show", "opacity"], correctAnswer: 0, explanation: "visibility controls visibility.", type: "mcq" },

  { id: 45, question: "Which value hides element but keeps space?", options: ["hidden", "none", "opacity:0", "invisible"], correctAnswer: 0, explanation: "visibility:hidden hides but keeps space.", type: "mcq" },

  { id: 46, question: "Which property defines flex grow?", options: ["flex-grow", "grow", "flex-size", "expand"], correctAnswer: 0, explanation: "flex-grow controls expansion.", type: "mcq" },

  { id: 47, question: "Which property defines flex shrink?", options: ["flex-shrink", "shrink", "flex-size", "reduce"], correctAnswer: 0, explanation: "flex-shrink controls shrinking.", type: "mcq" },

  { id: 48, question: "Which property defines flex basis?", options: ["flex-basis", "basis", "flex-size", "size"], correctAnswer: 0, explanation: "flex-basis defines base size.", type: "mcq" },

  { id: 49, question: "Which shorthand combines grow, shrink, basis?", options: ["flex", "flex-all", "flex-box", "flex-group"], correctAnswer: 0, explanation: "flex shorthand combines properties.", type: "mcq" },

  { id: 50, question: "Which property defines order in flex?", options: ["order", "flex-order", "position", "index"], correctAnswer: 0, explanation: "order changes item order.", type: "mcq" }
],
 "CSS-Advanced": [
  { id: 1, question: "What is CSS specificity?", options: ["Rule priority system", "Animation type", "Layout model", "Selector grouping"], correctAnswer: 0, explanation: "Specificity determines which CSS rule applies.", type: "conceptual" },

  { id: 2, question: "Which selector has highest specificity?", options: [".class", "#id", "element", "*"], correctAnswer: 1, explanation: "ID selectors have highest specificity.", type: "mcq" },

  { id: 3, question: "What does !important do?", options: ["Increases specificity", "Overrides all rules", "Adds priority", "Both b & c"], correctAnswer: 3, explanation: "!important overrides normal rules.", type: "conceptual" },

  { id: 4, question: "Which layout is best for 2D layouts?", options: ["Flexbox", "Grid", "Float", "Inline-block"], correctAnswer: 1, explanation: "Grid is designed for 2D layouts.", type: "conceptual" },

  { id: 5, question: "Which layout is best for 1D layouts?", options: ["Grid", "Flexbox", "Table", "Float"], correctAnswer: 1, explanation: "Flexbox is for 1D layouts.", type: "conceptual" },

  { id: 6, question: "Which property defines grid areas?", options: ["grid-area", "grid-template-areas", "grid-layout", "area"], correctAnswer: 1, explanation: "Defines named grid areas.", type: "mcq" },

  { id: 7, question: "Which value auto-fills grid columns?", options: ["auto-fill", "repeat", "auto-fit", "fill"], correctAnswer: 0, explanation: "auto-fill fills available space.", type: "mcq" },

  { id: 8, question: "Difference between auto-fill and auto-fit?", options: ["Same", "auto-fit collapses empty tracks", "auto-fill collapses tracks", "None"], correctAnswer: 1, explanation: "auto-fit collapses unused tracks.", type: "conceptual" },

  { id: 9, question: "Which property controls alignment in grid?", options: ["justify-items", "align-items", "place-items", "All of the above"], correctAnswer: 3, explanation: "All control alignment.", type: "mcq" },

  { id: 10, question: "Which shorthand combines align and justify?", options: ["place-items", "align", "justify", "grid-align"], correctAnswer: 0, explanation: "place-items combines both.", type: "mcq" },

  { id: 11, question: "Which property creates stacking context?", options: ["z-index", "position", "opacity", "All of the above"], correctAnswer: 3, explanation: "All can create stacking context.", type: "conceptual" },

  { id: 12, question: "Which value creates new stacking context?", options: ["opacity < 1", "position:relative", "z-index:auto", "display:block"], correctAnswer: 0, explanation: "Opacity <1 creates stacking context.", type: "mcq" },

  { id: 13, question: "What is reflow?", options: ["Layout recalculation", "Painting process", "Animation", "Rendering"], correctAnswer: 0, explanation: "Reflow recalculates layout.", type: "conceptual" },

  { id: 14, question: "What is repaint?", options: ["Layout change", "Visual redraw", "DOM update", "JS execution"], correctAnswer: 1, explanation: "Repaint redraws visuals.", type: "conceptual" },

  { id: 15, question: "Which property triggers GPU acceleration?", options: ["transform", "margin", "padding", "display"], correctAnswer: 0, explanation: "transform uses GPU.", type: "conceptual" },

  { id: 16, question: "Which property is best for performance animations?", options: ["top/left", "margin", "transform", "width"], correctAnswer: 2, explanation: "transform is more performant.", type: "conceptual" },

  { id: 17, question: "Which property controls animation timing?", options: ["animation-delay", "animation-timing-function", "animation-duration", "animation"], correctAnswer: 1, explanation: "Controls speed curve.", type: "mcq" },

  { id: 18, question: "Which timing function is linear?", options: ["ease", "ease-in", "linear", "ease-out"], correctAnswer: 2, explanation: "linear is constant speed.", type: "mcq" },

  { id: 19, question: "Which property repeats animation?", options: ["animation-count", "animation-iteration-count", "repeat", "loop"], correctAnswer: 1, explanation: "Controls repetition.", type: "mcq" },

  { id: 20, question: "Which value runs animation infinitely?", options: ["loop", "infinite", "always", "repeat"], correctAnswer: 1, explanation: "infinite repeats animation.", type: "mcq" },

  { id: 21, question: "What is will-change?", options: ["Performance hint", "Animation property", "Layout control", "Rendering fix"], correctAnswer: 0, explanation: "Hints browser for optimization.", type: "conceptual" },

  { id: 22, question: "Which property applies filter effects?", options: ["filter", "effect", "blur", "visual"], correctAnswer: 0, explanation: "filter adds visual effects.", type: "mcq" },

  { id: 23, question: "Which function blurs element?", options: ["blur()", "opacity()", "fade()", "shadow()"], correctAnswer: 0, explanation: "blur applies blur effect.", type: "mcq" },

  { id: 24, question: "Which property defines blend mode?", options: ["mix-blend-mode", "blend", "mode", "filter"], correctAnswer: 0, explanation: "Controls blending.", type: "mcq" },

  { id: 25, question: "Which property clips element shape?", options: ["clip", "clip-path", "mask", "shape"], correctAnswer: 1, explanation: "clip-path defines shapes.", type: "mcq" },

  { id: 26, question: "Which function creates circle clip?", options: ["circle()", "round()", "ellipse()", "shape()"], correctAnswer: 0, explanation: "circle() creates circular clip.", type: "mcq" },

  { id: 27, question: "Which property defines variable?", options: ["--var", "var()", "variable", "--custom"], correctAnswer: 0, explanation: "-- defines CSS variable.", type: "mcq" },

  { id: 28, question: "Which function uses variable?", options: ["var()", "use()", "get()", "value()"], correctAnswer: 0, explanation: "var() accesses variables.", type: "mcq" },

  { id: 29, question: "Which scope defines global variable?", options: [":root", "body", "html", "*"], correctAnswer: 0, explanation: ":root defines global variables.", type: "mcq" },

  { id: 30, question: "Which property defines aspect ratio?", options: ["aspect-ratio", "ratio", "size-ratio", "proportion"], correctAnswer: 0, explanation: "aspect-ratio controls dimensions.", type: "mcq" },

  { id: 31, question: "Which property defines container queries?", options: ["@container", "@media", "@query", "@responsive"], correctAnswer: 0, explanation: "@container enables container queries.", type: "conceptual" },

  { id: 32, question: "Which property controls scroll behavior?", options: ["scroll", "scroll-behavior", "overflow", "scroll-style"], correctAnswer: 1, explanation: "scroll-behavior controls smooth scroll.", type: "mcq" },

  { id: 33, question: "Which value enables smooth scrolling?", options: ["auto", "smooth", "ease", "scroll"], correctAnswer: 1, explanation: "smooth enables animation.", type: "mcq" },

  { id: 34, question: "Which property controls snapping?", options: ["scroll-snap-type", "snap", "scroll-type", "snap-type"], correctAnswer: 0, explanation: "Defines snapping behavior.", type: "mcq" },

  { id: 35, question: "Which property defines snap alignment?", options: ["snap-align", "scroll-snap-align", "align", "snap"], correctAnswer: 1, explanation: "Aligns snap position.", type: "mcq" },

  { id: 36, question: "Which property controls object position?", options: ["object-position", "position", "object-fit", "align"], correctAnswer: 0, explanation: "Positions object inside container.", type: "mcq" },

  { id: 37, question: "Which property isolates stacking context?", options: ["isolation", "z-index", "position", "opacity"], correctAnswer: 0, explanation: "isolation creates new stacking context.", type: "mcq" },

  { id: 38, question: "Which property controls pointer events?", options: ["pointer-events", "events", "cursor", "click"], correctAnswer: 0, explanation: "Controls click behavior.", type: "mcq" },

  { id: 39, question: "Which value disables pointer events?", options: ["none", "disable", "off", "hidden"], correctAnswer: 0, explanation: "none disables events.", type: "mcq" },

  { id: 40, question: "Which property defines writing mode?", options: ["writing-mode", "text-mode", "direction", "layout"], correctAnswer: 0, explanation: "Controls text direction.", type: "mcq" },

  { id: 41, question: "Which property defines text overflow?", options: ["overflow", "text-overflow", "clip", "truncate"], correctAnswer: 1, explanation: "Controls ellipsis.", type: "mcq" },

  { id: 42, question: "Which value shows ellipsis?", options: ["clip", "ellipsis", "dots", "hidden"], correctAnswer: 1, explanation: "ellipsis shows ...", type: "mcq" },

  { id: 43, question: "Which property defines caret color?", options: ["caret-color", "cursor-color", "text-color", "color"], correctAnswer: 0, explanation: "Controls cursor color.", type: "mcq" },

  { id: 44, question: "Which property defines user selection?", options: ["user-select", "select", "text-select", "highlight"], correctAnswer: 0, explanation: "Controls text selection.", type: "mcq" },

  { id: 45, question: "Which value disables selection?", options: ["none", "disable", "off", "hidden"], correctAnswer: 0, explanation: "none disables selection.", type: "mcq" },

  { id: 46, question: "Which property defines backdrop filter?", options: ["filter", "backdrop-filter", "bg-filter", "blur"], correctAnswer: 1, explanation: "Applies filter behind element.", type: "mcq" },

  { id: 47, question: "Which property controls mix-blend-mode?", options: ["blend", "mix-blend-mode", "filter", "mode"], correctAnswer: 1, explanation: "Controls blending with background.", type: "mcq" },

  { id: 48, question: "Which property defines scroll margin?", options: ["scroll-margin", "margin", "scroll-padding", "padding"], correctAnswer: 0, explanation: "Defines scroll offset.", type: "mcq" },

  { id: 49, question: "Which property defines scroll padding?", options: ["scroll-padding", "padding", "scroll-margin", "margin"], correctAnswer: 0, explanation: "Defines inner offset.", type: "mcq" },

  { id: 50, question: "Which property controls accent color?", options: ["accent-color", "color-accent", "theme-color", "ui-color"], correctAnswer: 0, explanation: "Defines UI element color.", type: "mcq" }
],
};
