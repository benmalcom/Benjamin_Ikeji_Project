import { IconButton } from '@chakra-ui/react';
import React from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { FlexColumn } from 'components/common';

type MovieCardSkeletonType = {
  onScrollDown(): void;
  onScrollUp(): void;
  isTopVisible: boolean;
  isBottomVisible: boolean;
};
const SideNav: React.FC<MovieCardSkeletonType> = ({
  onScrollDown,
  onScrollUp,
  isTopVisible,
  isBottomVisible,
}) => (
  <FlexColumn
    justify="space-between"
    w={{ base: 'fit-content', md: '70px' }}
    h={{ base: 'fit-content', md: '120px' }}
    bg="gray.600"
    boxShadow="lg"
    borderRadius={6}
    mt={20}
    pos="fixed"
    left={{ base: 5, md: 'unset' }}
  >
    <IconButton
      colorScheme={isTopVisible ? 'gray' : 'orange'}
      aria-label="Move up"
      icon={<BsChevronUp />}
      isDisabled={isTopVisible}
      onClick={onScrollUp}
    />
    <IconButton
      colorScheme={isBottomVisible ? 'gray' : 'orange'}
      aria-label="Move down"
      icon={<BsChevronDown />}
      isDisabled={isBottomVisible}
      onClick={onScrollDown}
    />
  </FlexColumn>
);

export default SideNav;
