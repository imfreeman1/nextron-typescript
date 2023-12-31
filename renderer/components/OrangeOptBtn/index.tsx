import React, { useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Button from '../Button';
import { calAtom, calStringAtom } from '../../recoil/calculator';
import {
  BTN_LIST,
  ORANGE_BTN_METHOD,
} from '../../constants/btnConstants/btnConstants';
import { CalRefType } from './type';
import { STRING_CONSTANT } from '../../constants/basicConstants/basicConstants';

// ref보단 state로 관리하는 것이 좋을 듯. atom으로 관리하면 제일 베스트.
// 추가적으로 필요한 것 : atom Selector에 대한 이해.

function OrangeOptBtn() {
  const [count, setCount] = useRecoilState(calAtom);
  const setCountString = useSetRecoilState(calStringAtom);
  const initRef: CalRefType = {
    waitNum: count,
    operation: '',
  };
  const waitCalculation = useRef<CalRefType>(initRef);

  const onClick = (operation: string) => {
    if (count) waitCalculation.current.waitNum = count;
    waitCalculation.current.operation = operation;
    setCountString(
      waitCalculation.current.waitNum + waitCalculation.current.operation,
    );
    setCount(STRING_CONSTANT.zero);
  };

  const calculationOnClick = () => {
    if (!waitCalculation.current.operation || !waitCalculation.current.waitNum)
      return;

    ORANGE_BTN_METHOD[waitCalculation.current.operation](
      waitCalculation.current.waitNum,
      count,
      setCount,
    );
    waitCalculation.current.waitNum = '';
    waitCalculation.current.operation = '';
    setCountString(STRING_CONSTANT.empty);
  };
  return (
    <ul className="flex flex-col gap-1">
      {BTN_LIST.orange.map((btn) => (
        <li key={btn}>
          <Button
            type="button"
            className="btn-orange"
            onClick={() => onClick(btn)}
          >
            {btn}
          </Button>
        </li>
      ))}
      <li>
        <Button
          type="button"
          className="btn-orange"
          onClick={calculationOnClick}
        >
          {STRING_CONSTANT.equal}
        </Button>
      </li>
    </ul>
  );
}

export default OrangeOptBtn;
