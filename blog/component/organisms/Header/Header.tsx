import Icon from "../../atoms/Icon/Icon";
import React from "react";

const Header = () => {
  return (
    <header className="w-full border-b h-16 p-5">
      <div className="flex justify-between items-center">
        <div>준일한 블로그</div>
        <div className="flex w-3/5 justify-around lg:w-1/4">
          <div>컴포넌트</div>
          <div>블로깅</div>
          <div>실험실</div>
        </div>
        <Icon icon="FaSearch"></Icon>
      </div>
    </header>
  );
};

export { Header };
