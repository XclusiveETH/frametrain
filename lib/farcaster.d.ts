import type { FrameButtonMetadata as OnchainKitFrameButtonMetadata } from '@coinbase/onchainkit/frame'
import type {
    User as NeynarUser,
    ValidatedFrameActionResponse as NeynarValidatedFrameActionResponse,
} from '@neynar/nodejs-sdk/build/neynar-api/v2'
import type { FrameActionPayload as FramesJSFrameActionPayload } from 'frames.js'

// We use the version from OnchainKit because it doesn't set the `action` and `target` fields as required.
export type FrameButtonMetadata = OnchainKitFrameButtonMetadata

export type FrameActionPayload = FramesJSFrameActionPayload

export type FrameValidatedActionPayload = NeynarValidatedFrameActionResponse

export type FarcasterUserInfo = NeynarUser

