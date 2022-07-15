import { tw, apply } from 'twind'

// export const content = style([
//   atoms({
//     // backgroundColor: "fillSecondary",
//     backgroundColor: "backgroundElevated",
//     borderRadius: "1",
//     fontSize: "2",
//     padding: "5",
//   }),
//   style({

//     fontWeight: 400,
//     maxWidth: 420,
//     minWidth: 200,
//     wordBreak: "break-word",
//     ":focus": { outline: "none" },
//   }),
// ]);

// export const arrow = style([
//   atoms({}),
//   style({
//     selectors: {
//       // can't set fill as a sprinkles prop, recreate backgroundElevated
//       "[data-mode='light'] &": {
//         fill: vars.colors.blueGray10,
//       },
//       "[data-mode='dark'] &": {
//         fill: vars.colors.white10,
//       },
//     },
//   }),
// ]);

// boxShadow: "0 0 24px rgba(0, 0, 0, .1)",
export const content = apply`text-base font-normal p-4 rounded-md shadow-lg max-w-[420px] min-w-[200px] break-words focus:outline-none`

export const arrow = apply`fill-current`
