const size = {
  phone: 500,
  tabletPortrait: 600,
  tablet: 900,
  desktop: 1200,
};

export const device = {
  phone: `(min-width: ${size.phone}px)`,
  tabletPortrait: `(min-width: ${size.tabletPortrait}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
};

export const breakpointAbove = {
  desktop: `@media (min-width: ${size.desktop}px)`,
  tablet: `@media (min-width: ${size.tablet}px)`,
  tabletPortrait: `@media (min-width: ${size.tabletPortrait}px)`,
  phone: `@media (min-width: ${size.phone}px)`,
};

export const breakpointBelow = {
  tablet: `@media (max-width: ${size.tablet - 1}px)`,
  desktop: `@media (max-width: ${size.desktop - 1}px)`,
  tabletPortrait: `@media (max-width: ${size.tabletPortrait - 1}px)`,
  phone: `@media (max-width: ${size.phone - 1}px)`,
};

export const breakpointBetween = {
  phoneAndTablet: `@media (min-width: ${size.phone}px) and (max-width: ${size.tablet - 1}px)`,
  phoneAndTabletPortrait: `@media (min-width: ${size.phone}px) and (max-width: ${size.tabletPortrait - 1}px)`,
  tabletPortraitAndTablet: `@media (min-width: ${size.tabletPortrait}px) and (max-width: ${size.tablet - 1}px)`,
};