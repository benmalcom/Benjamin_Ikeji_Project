import { IconButton } from '@chakra-ui/react';
import React from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { FlexColumn } from 'components/common';

type SideNavProps = {
  onScrollDown(): void;
  onScrollUp(): void;
  isTopVisible: boolean;
  isBottomVisible: boolean;
};
const SideNav: React.FC<SideNavProps> = ({
  onScrollDown,
  onScrollUp,
  isTopVisible,
  isBottomVisible,
}) => (
  <FlexColumn
    justify="space-between"
    display={{ base: 'none', md: 'flex' }}
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
      _focus={{ outline: 'none' }}
    />
    <IconButton
      colorScheme={isBottomVisible ? 'gray' : 'orange'}
      aria-label="Move down"
      icon={<BsChevronDown />}
      isDisabled={isBottomVisible}
      onClick={onScrollDown}
      _focus={{ outline: 'none' }}
    />
  </FlexColumn>
);

export default SideNav;
