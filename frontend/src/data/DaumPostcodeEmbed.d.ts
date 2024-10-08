import React, { Component, CSSProperties } from 'react';
import { PostcodeConstructor , PostcodeOptions } from 'react-daum-postcode/lib/loadPostcode';


export interface DaumPostcodeEmbedProps extends Omit<PostcodeOptions, 'oncomplete' | 'onresize' | 'onclose' | 'onsearch' | 'width' | 'height'> {
    onComplete?: PostcodeOptions['oncomplete'];
    onResize?: PostcodeOptions['onresize'];
    onClose?: PostcodeOptions['onclose'];
    onSearch?: PostcodeOptions['onsearch'];
    className?: string;
    style?: CSSProperties;
    defaultQuery?: string;
    errorMessage?: string | React.ReactNode;
    scriptUrl?: string;
    autoClose?: boolean;
}
/**
 * @deprecated
 * type 'DaumPostcodeProps' is renamed to 'DaumPostcodeEmbedProps'.
 * use 'DaumPostcodeEmbedProps' instead of 'DaumPostcodeProps'.
 * it will be removed future version.
 */
export declare type DaumPostcodeProps = DaumPostcodeEmbedProps;
interface State {
    hasError: boolean;
}
declare class DaumPostcodeEmbed extends Component<DaumPostcodeEmbedProps, State> {
    static defaultProps: {
        scriptUrl: string;
        errorMessage: JSX.Element;
        autoClose: boolean;
    };
    /**
     * See #61
     */
    private mounted;
    wrap: React.RefObject<HTMLDivElement>;
    state: {
        hasError: boolean;
    };
    componentDidMount(): void;
    initiate: (Postcode: PostcodeConstructor) => void;
    onError: (e: unknown) => void;
    render(): JSX.Element;
}
export default DaumPostcodeEmbed;
