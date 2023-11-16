import { MouseEventHandler } from "react";

/**
 * 버튼 컴포넌트의 props 타입 정의
 */
export interface ButtonProps {
  /**
   * 버튼에 표시될 텍스트
   */
  text?: string;
  /**
   * 버튼 비활성화 여부
   */
  disabled?: boolean;
  /**
   * 버튼 크기
   */
  size?: "sm" | "md" | "lg";
  /**
   * 버튼 클릭 이벤트 핸들러
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
