import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Grid,
  GridProps,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import FlexColumn from './FlexColumn';

export const MotionBox = motion<BoxProps>(Box);
export const MotionFlex = motion<FlexProps>(Flex);
export const MotionGrid = motion<GridProps>(Grid);
export const MotionFlexColumn = motion<FlexProps>(FlexColumn);
