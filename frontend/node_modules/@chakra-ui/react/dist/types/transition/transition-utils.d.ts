import type { AnimatePresenceProps, Target, TargetAndTransition, Transition } from "framer-motion";
export type TransitionProperties = {
    /**
     * Custom `transition` definition for `enter` and `exit`
     */
    transition?: TransitionConfig;
    /**
     * Custom `transitionEnd` definition for `enter` and `exit`
     */
    transitionEnd?: TransitionEndConfig;
    /**
     * Custom `delay` definition for `enter` and `exit`
     */
    delay?: number | DelayConfig;
};
type TargetResolver<P = {}> = (props: P & TransitionProperties) => TargetAndTransition;
type Variant<P = {}> = TargetAndTransition | TargetResolver<P>;
export type Variants<P = {}> = {
    enter: Variant<P>;
    exit: Variant<P>;
    initial?: Variant<P>;
};
type WithMotionState<P> = Partial<Record<"enter" | "exit", P>>;
export type TransitionConfig = WithMotionState<Transition>;
export type TransitionEndConfig = WithMotionState<Target>;
export type DelayConfig = WithMotionState<number>;
export declare const TRANSITION_EASINGS: {
    readonly ease: readonly [0.25, 0.1, 0.25, 1];
    readonly easeIn: readonly [0.4, 0, 1, 1];
    readonly easeOut: readonly [0, 0, 0.2, 1];
    readonly easeInOut: readonly [0.4, 0, 0.2, 1];
};
export declare const TRANSITION_VARIANTS: {
    scale: {
        enter: {
            scale: number;
        };
        exit: {
            scale: number;
        };
    };
    fade: {
        enter: {
            opacity: number;
        };
        exit: {
            opacity: number;
        };
    };
    pushLeft: {
        enter: {
            x: string;
        };
        exit: {
            x: string;
        };
    };
    pushRight: {
        enter: {
            x: string;
        };
        exit: {
            x: string;
        };
    };
    pushUp: {
        enter: {
            y: string;
        };
        exit: {
            y: string;
        };
    };
    pushDown: {
        enter: {
            y: string;
        };
        exit: {
            y: string;
        };
    };
    slideLeft: {
        position: {
            left: number;
            top: number;
            bottom: number;
            width: string;
        };
        enter: {
            x: number;
            y: number;
        };
        exit: {
            x: string;
            y: number;
        };
    };
    slideRight: {
        position: {
            right: number;
            top: number;
            bottom: number;
            width: string;
        };
        enter: {
            x: number;
            y: number;
        };
        exit: {
            x: string;
            y: number;
        };
    };
    slideUp: {
        position: {
            top: number;
            left: number;
            right: number;
            maxWidth: string;
        };
        enter: {
            x: number;
            y: number;
        };
        exit: {
            x: number;
            y: string;
        };
    };
    slideDown: {
        position: {
            bottom: number;
            left: number;
            right: number;
            maxWidth: string;
        };
        enter: {
            x: number;
            y: number;
        };
        exit: {
            x: number;
            y: string;
        };
    };
};
export type SlideDirection = "top" | "left" | "bottom" | "right";
export declare function getSlideTransition(options?: {
    direction?: SlideDirection;
}): {
    position: {
        left: number;
        top: number;
        bottom: number;
        width: string;
    };
    enter: {
        x: number;
        y: number;
    };
    exit: {
        x: string;
        y: number;
    };
} | {
    position: {
        right: number;
        top: number;
        bottom: number;
        width: string;
    };
    enter: {
        x: number;
        y: number;
    };
    exit: {
        x: string;
        y: number;
    };
} | {
    position: {
        top: number;
        left: number;
        right: number;
        maxWidth: string;
    };
    enter: {
        x: number;
        y: number;
    };
    exit: {
        x: number;
        y: string;
    };
} | {
    position: {
        bottom: number;
        left: number;
        right: number;
        maxWidth: string;
    };
    enter: {
        x: number;
        y: number;
    };
    exit: {
        x: number;
        y: string;
    };
};
export declare const TRANSITION_DEFAULTS: {
    readonly enter: {
        readonly duration: 0.2;
        readonly ease: readonly [0, 0, 0.2, 1];
    };
    readonly exit: {
        readonly duration: 0.1;
        readonly ease: readonly [0.4, 0, 1, 1];
    };
};
export type WithTransitionConfig<P extends object> = Omit<P, "transition"> & TransitionProperties & {
    /**
     * If `true`, the element will unmount when `in={false}` and animation is done
     */
    unmountOnExit?: boolean;
    /**
     * Show the component; triggers when enter or exit states
     */
    in?: boolean;
    /**
     * Additional props to pass to `AnimatePresence`
     */
    animatePresenceProps?: AnimatePresenceProps;
};
export declare const withDelay: {
    enter: (transition: Transition, delay?: number | DelayConfig) => Transition & {
        delay: number | undefined;
    };
    exit: (transition: Transition, delay?: number | DelayConfig) => Transition & {
        delay: number | undefined;
    };
};
export {};
