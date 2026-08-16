import type { Density } from "~/models";
export interface FollowButtonProps {
    /** True when the viewer already follows the account. */
    following: boolean;
    /** Called with the state the button is moving to, not the current one. */
    onFollowToggle: (following: boolean) => void;
    /** Drives the button height. */
    density?: Density;
}
export declare function FollowButton({ following, onFollowToggle, density }: FollowButtonProps): import("react").JSX.Element;
