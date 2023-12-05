import React from 'react';
import SearchInput from '../../components/SearchInput';
import Tags from '../../components/Tags';
import { INTEREST_LIST } from '../../constants/interest';
import Memos from '../../components/Memos';

const SharePlanPage = () => {
  const tags = [{ interest: '전체', checked: true }, ...INTEREST_LIST];
  return (
    <div>
      <SearchInput />
      <Tags tags={tags} />
      <Memos />
    </div>
  );
};

export default SharePlanPage;
