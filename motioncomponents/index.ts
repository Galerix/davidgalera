import { Stack, StackProps, Text, TextProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionStack = motion<StackProps>(Stack);
export const MotionText = motion<TextProps>(Text);
