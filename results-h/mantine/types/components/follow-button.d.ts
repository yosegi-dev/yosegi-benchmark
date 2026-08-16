import type { Density } from "~/models";
export interface FollowButtonProps {
    /** Whether the viewer already follows the account. */
    following: boolean;
    /** Fired with the state the button is moving to, not the current one. */
    onFollowToggle: (following: boolean) => void;
    /** Control size. */
    density?: Density;
}
export declare function FollowButton({ following, onFollowToggle, density }: FollowButtonProps): import("react").JSX.Element;
