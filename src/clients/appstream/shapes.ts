/**
 * @schema AssociateFleetRequest
 */
export interface AssociateFleetRequest {
  /**
   * @schema AssociateFleetRequest#FleetName
   */
  readonly fleetName: string;

  /**
   * @schema AssociateFleetRequest#StackName
   */
  readonly stackName: string;

}

/**
 * @schema AssociateFleetResult
 */
export interface AssociateFleetResult {
}

/**
 * @schema BatchAssociateUserStackRequest
 */
export interface BatchAssociateUserStackRequest {
  /**
   * @schema BatchAssociateUserStackRequest#UserStackAssociations
   */
  readonly userStackAssociations: UserStackAssociation[];

}

/**
 * @schema BatchAssociateUserStackResult
 */
export interface BatchAssociateUserStackResult {
  /**
   * @schema BatchAssociateUserStackResult#errors
   */
  readonly errors?: UserStackAssociationError[];

}

/**
 * @schema BatchDisassociateUserStackRequest
 */
export interface BatchDisassociateUserStackRequest {
  /**
   * @schema BatchDisassociateUserStackRequest#UserStackAssociations
   */
  readonly userStackAssociations: UserStackAssociation[];

}

/**
 * @schema BatchDisassociateUserStackResult
 */
export interface BatchDisassociateUserStackResult {
  /**
   * @schema BatchDisassociateUserStackResult#errors
   */
  readonly errors?: UserStackAssociationError[];

}

/**
 * @schema CopyImageRequest
 */
export interface CopyImageRequest {
  /**
   * @schema CopyImageRequest#SourceImageName
   */
  readonly sourceImageName: string;

  /**
   * @schema CopyImageRequest#DestinationImageName
   */
  readonly destinationImageName: string;

  /**
   * @schema CopyImageRequest#DestinationRegion
   */
  readonly destinationRegion: string;

  /**
   * @schema CopyImageRequest#DestinationImageDescription
   */
  readonly destinationImageDescription?: string;

}

/**
 * @schema CopyImageResponse
 */
export interface CopyImageResponse {
  /**
   * @schema CopyImageResponse#DestinationImageName
   */
  readonly destinationImageName?: string;

}

/**
 * @schema CreateDirectoryConfigRequest
 */
export interface CreateDirectoryConfigRequest {
  /**
   * @schema CreateDirectoryConfigRequest#DirectoryName
   */
  readonly directoryName: string;

  /**
   * @schema CreateDirectoryConfigRequest#OrganizationalUnitDistinguishedNames
   */
  readonly organizationalUnitDistinguishedNames: string[];

  /**
   * @schema CreateDirectoryConfigRequest#ServiceAccountCredentials
   */
  readonly serviceAccountCredentials?: ServiceAccountCredentials;

}

/**
 * @schema CreateDirectoryConfigResult
 */
export interface CreateDirectoryConfigResult {
  /**
   * @schema CreateDirectoryConfigResult#DirectoryConfig
   */
  readonly directoryConfig?: DirectoryConfig;

}

/**
 * @schema CreateFleetRequest
 */
export interface CreateFleetRequest {
  /**
   * @schema CreateFleetRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateFleetRequest#ImageName
   */
  readonly imageName?: string;

  /**
   * @schema CreateFleetRequest#ImageArn
   */
  readonly imageArn?: string;

  /**
   * @schema CreateFleetRequest#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema CreateFleetRequest#FleetType
   */
  readonly fleetType?: string;

  /**
   * @schema CreateFleetRequest#ComputeCapacity
   */
  readonly computeCapacity: ComputeCapacity;

  /**
   * @schema CreateFleetRequest#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

  /**
   * @schema CreateFleetRequest#MaxUserDurationInSeconds
   */
  readonly maxUserDurationInSeconds?: number;

  /**
   * @schema CreateFleetRequest#DisconnectTimeoutInSeconds
   */
  readonly disconnectTimeoutInSeconds?: number;

  /**
   * @schema CreateFleetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateFleetRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema CreateFleetRequest#EnableDefaultInternetAccess
   */
  readonly enableDefaultInternetAccess?: boolean;

  /**
   * @schema CreateFleetRequest#DomainJoinInfo
   */
  readonly domainJoinInfo?: DomainJoinInfo;

  /**
   * @schema CreateFleetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateFleetRequest#IdleDisconnectTimeoutInSeconds
   */
  readonly idleDisconnectTimeoutInSeconds?: number;

  /**
   * @schema CreateFleetRequest#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema CreateFleetRequest#StreamView
   */
  readonly streamView?: string;

}

/**
 * @schema CreateFleetResult
 */
export interface CreateFleetResult {
  /**
   * @schema CreateFleetResult#Fleet
   */
  readonly fleet?: Fleet;

}

/**
 * @schema CreateImageBuilderRequest
 */
export interface CreateImageBuilderRequest {
  /**
   * @schema CreateImageBuilderRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateImageBuilderRequest#ImageName
   */
  readonly imageName?: string;

  /**
   * @schema CreateImageBuilderRequest#ImageArn
   */
  readonly imageArn?: string;

  /**
   * @schema CreateImageBuilderRequest#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema CreateImageBuilderRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateImageBuilderRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema CreateImageBuilderRequest#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

  /**
   * @schema CreateImageBuilderRequest#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema CreateImageBuilderRequest#EnableDefaultInternetAccess
   */
  readonly enableDefaultInternetAccess?: boolean;

  /**
   * @schema CreateImageBuilderRequest#DomainJoinInfo
   */
  readonly domainJoinInfo?: DomainJoinInfo;

  /**
   * @schema CreateImageBuilderRequest#AppstreamAgentVersion
   */
  readonly appstreamAgentVersion?: string;

  /**
   * @schema CreateImageBuilderRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateImageBuilderRequest#AccessEndpoints
   */
  readonly accessEndpoints?: AccessEndpoint[];

}

/**
 * @schema CreateImageBuilderResult
 */
export interface CreateImageBuilderResult {
  /**
   * @schema CreateImageBuilderResult#ImageBuilder
   */
  readonly imageBuilder?: ImageBuilder;

}

/**
 * @schema CreateImageBuilderStreamingUrlRequest
 */
export interface CreateImageBuilderStreamingUrlRequest {
  /**
   * @schema CreateImageBuilderStreamingUrlRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateImageBuilderStreamingUrlRequest#Validity
   */
  readonly validity?: number;

}

/**
 * @schema CreateImageBuilderStreamingUrlResult
 */
export interface CreateImageBuilderStreamingUrlResult {
  /**
   * @schema CreateImageBuilderStreamingUrlResult#StreamingURL
   */
  readonly streamingUrl?: string;

  /**
   * @schema CreateImageBuilderStreamingUrlResult#Expires
   */
  readonly expires?: string;

}

/**
 * @schema CreateStackRequest
 */
export interface CreateStackRequest {
  /**
   * @schema CreateStackRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateStackRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateStackRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema CreateStackRequest#StorageConnectors
   */
  readonly storageConnectors?: StorageConnector[];

  /**
   * @schema CreateStackRequest#RedirectURL
   */
  readonly redirectUrl?: string;

  /**
   * @schema CreateStackRequest#FeedbackURL
   */
  readonly feedbackUrl?: string;

  /**
   * @schema CreateStackRequest#UserSettings
   */
  readonly userSettings?: UserSetting[];

  /**
   * @schema CreateStackRequest#ApplicationSettings
   */
  readonly applicationSettings?: ApplicationSettings;

  /**
   * @schema CreateStackRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateStackRequest#AccessEndpoints
   */
  readonly accessEndpoints?: AccessEndpoint[];

  /**
   * @schema CreateStackRequest#EmbedHostDomains
   */
  readonly embedHostDomains?: string[];

}

/**
 * @schema CreateStackResult
 */
export interface CreateStackResult {
  /**
   * @schema CreateStackResult#Stack
   */
  readonly stack?: Stack;

}

/**
 * @schema CreateStreamingUrlRequest
 */
export interface CreateStreamingUrlRequest {
  /**
   * @schema CreateStreamingUrlRequest#StackName
   */
  readonly stackName: string;

  /**
   * @schema CreateStreamingUrlRequest#FleetName
   */
  readonly fleetName: string;

  /**
   * @schema CreateStreamingUrlRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema CreateStreamingUrlRequest#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema CreateStreamingUrlRequest#Validity
   */
  readonly validity?: number;

  /**
   * @schema CreateStreamingUrlRequest#SessionContext
   */
  readonly sessionContext?: string;

}

/**
 * @schema CreateStreamingUrlResult
 */
export interface CreateStreamingUrlResult {
  /**
   * @schema CreateStreamingUrlResult#StreamingURL
   */
  readonly streamingUrl?: string;

  /**
   * @schema CreateStreamingUrlResult#Expires
   */
  readonly expires?: string;

}

/**
 * @schema CreateUsageReportSubscriptionRequest
 */
export interface CreateUsageReportSubscriptionRequest {
}

/**
 * @schema CreateUsageReportSubscriptionResult
 */
export interface CreateUsageReportSubscriptionResult {
  /**
   * @schema CreateUsageReportSubscriptionResult#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema CreateUsageReportSubscriptionResult#Schedule
   */
  readonly schedule?: string;

}

/**
 * @schema CreateUserRequest
 */
export interface CreateUserRequest {
  /**
   * @schema CreateUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema CreateUserRequest#MessageAction
   */
  readonly messageAction?: string;

  /**
   * @schema CreateUserRequest#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema CreateUserRequest#LastName
   */
  readonly lastName?: string;

  /**
   * @schema CreateUserRequest#AuthenticationType
   */
  readonly authenticationType: string;

}

/**
 * @schema CreateUserResult
 */
export interface CreateUserResult {
}

/**
 * @schema DeleteDirectoryConfigRequest
 */
export interface DeleteDirectoryConfigRequest {
  /**
   * @schema DeleteDirectoryConfigRequest#DirectoryName
   */
  readonly directoryName: string;

}

/**
 * @schema DeleteDirectoryConfigResult
 */
export interface DeleteDirectoryConfigResult {
}

/**
 * @schema DeleteFleetRequest
 */
export interface DeleteFleetRequest {
  /**
   * @schema DeleteFleetRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteFleetResult
 */
export interface DeleteFleetResult {
}

/**
 * @schema DeleteImageRequest
 */
export interface DeleteImageRequest {
  /**
   * @schema DeleteImageRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteImageResult
 */
export interface DeleteImageResult {
  /**
   * @schema DeleteImageResult#Image
   */
  readonly image?: Image;

}

/**
 * @schema DeleteImageBuilderRequest
 */
export interface DeleteImageBuilderRequest {
  /**
   * @schema DeleteImageBuilderRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteImageBuilderResult
 */
export interface DeleteImageBuilderResult {
  /**
   * @schema DeleteImageBuilderResult#ImageBuilder
   */
  readonly imageBuilder?: ImageBuilder;

}

/**
 * @schema DeleteImagePermissionsRequest
 */
export interface DeleteImagePermissionsRequest {
  /**
   * @schema DeleteImagePermissionsRequest#Name
   */
  readonly name: string;

  /**
   * @schema DeleteImagePermissionsRequest#SharedAccountId
   */
  readonly sharedAccountId: string;

}

/**
 * @schema DeleteImagePermissionsResult
 */
export interface DeleteImagePermissionsResult {
}

/**
 * @schema DeleteStackRequest
 */
export interface DeleteStackRequest {
  /**
   * @schema DeleteStackRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteStackResult
 */
export interface DeleteStackResult {
}

/**
 * @schema DeleteUsageReportSubscriptionRequest
 */
export interface DeleteUsageReportSubscriptionRequest {
}

/**
 * @schema DeleteUsageReportSubscriptionResult
 */
export interface DeleteUsageReportSubscriptionResult {
}

/**
 * @schema DeleteUserRequest
 */
export interface DeleteUserRequest {
  /**
   * @schema DeleteUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema DeleteUserRequest#AuthenticationType
   */
  readonly authenticationType: string;

}

/**
 * @schema DeleteUserResult
 */
export interface DeleteUserResult {
}

/**
 * @schema DescribeDirectoryConfigsRequest
 */
export interface DescribeDirectoryConfigsRequest {
  /**
   * @schema DescribeDirectoryConfigsRequest#DirectoryNames
   */
  readonly directoryNames?: string[];

  /**
   * @schema DescribeDirectoryConfigsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeDirectoryConfigsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeDirectoryConfigsResult
 */
export interface DescribeDirectoryConfigsResult {
  /**
   * @schema DescribeDirectoryConfigsResult#DirectoryConfigs
   */
  readonly directoryConfigs?: DirectoryConfig[];

  /**
   * @schema DescribeDirectoryConfigsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeFleetsRequest
 */
export interface DescribeFleetsRequest {
  /**
   * @schema DescribeFleetsRequest#Names
   */
  readonly names?: string[];

  /**
   * @schema DescribeFleetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeFleetsResult
 */
export interface DescribeFleetsResult {
  /**
   * @schema DescribeFleetsResult#Fleets
   */
  readonly fleets?: Fleet[];

  /**
   * @schema DescribeFleetsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeImageBuildersRequest
 */
export interface DescribeImageBuildersRequest {
  /**
   * @schema DescribeImageBuildersRequest#Names
   */
  readonly names?: string[];

  /**
   * @schema DescribeImageBuildersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeImageBuildersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeImageBuildersResult
 */
export interface DescribeImageBuildersResult {
  /**
   * @schema DescribeImageBuildersResult#ImageBuilders
   */
  readonly imageBuilders?: ImageBuilder[];

  /**
   * @schema DescribeImageBuildersResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeImagePermissionsRequest
 */
export interface DescribeImagePermissionsRequest {
  /**
   * @schema DescribeImagePermissionsRequest#Name
   */
  readonly name: string;

  /**
   * @schema DescribeImagePermissionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeImagePermissionsRequest#SharedAwsAccountIds
   */
  readonly sharedAwsAccountIds?: string[];

  /**
   * @schema DescribeImagePermissionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeImagePermissionsResult
 */
export interface DescribeImagePermissionsResult {
  /**
   * @schema DescribeImagePermissionsResult#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeImagePermissionsResult#SharedImagePermissionsList
   */
  readonly sharedImagePermissionsList?: SharedImagePermissions[];

  /**
   * @schema DescribeImagePermissionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeImagesRequest
 */
export interface DescribeImagesRequest {
  /**
   * @schema DescribeImagesRequest#Names
   */
  readonly names?: string[];

  /**
   * @schema DescribeImagesRequest#Arns
   */
  readonly arns?: string[];

  /**
   * @schema DescribeImagesRequest#Type
   */
  readonly type?: string;

  /**
   * @schema DescribeImagesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeImagesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeImagesResult
 */
export interface DescribeImagesResult {
  /**
   * @schema DescribeImagesResult#Images
   */
  readonly images?: Image[];

  /**
   * @schema DescribeImagesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeSessionsRequest
 */
export interface DescribeSessionsRequest {
  /**
   * @schema DescribeSessionsRequest#StackName
   */
  readonly stackName: string;

  /**
   * @schema DescribeSessionsRequest#FleetName
   */
  readonly fleetName: string;

  /**
   * @schema DescribeSessionsRequest#UserId
   */
  readonly userId?: string;

  /**
   * @schema DescribeSessionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeSessionsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeSessionsRequest#AuthenticationType
   */
  readonly authenticationType?: string;

}

/**
 * @schema DescribeSessionsResult
 */
export interface DescribeSessionsResult {
  /**
   * @schema DescribeSessionsResult#Sessions
   */
  readonly sessions?: Session[];

  /**
   * @schema DescribeSessionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeStacksRequest
 */
export interface DescribeStacksRequest {
  /**
   * @schema DescribeStacksRequest#Names
   */
  readonly names?: string[];

  /**
   * @schema DescribeStacksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeStacksResult
 */
export interface DescribeStacksResult {
  /**
   * @schema DescribeStacksResult#Stacks
   */
  readonly stacks?: Stack[];

  /**
   * @schema DescribeStacksResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeUsageReportSubscriptionsRequest
 */
export interface DescribeUsageReportSubscriptionsRequest {
  /**
   * @schema DescribeUsageReportSubscriptionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeUsageReportSubscriptionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeUsageReportSubscriptionsResult
 */
export interface DescribeUsageReportSubscriptionsResult {
  /**
   * @schema DescribeUsageReportSubscriptionsResult#UsageReportSubscriptions
   */
  readonly usageReportSubscriptions?: UsageReportSubscription[];

  /**
   * @schema DescribeUsageReportSubscriptionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeUserStackAssociationsRequest
 */
export interface DescribeUserStackAssociationsRequest {
  /**
   * @schema DescribeUserStackAssociationsRequest#StackName
   */
  readonly stackName?: string;

  /**
   * @schema DescribeUserStackAssociationsRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema DescribeUserStackAssociationsRequest#AuthenticationType
   */
  readonly authenticationType?: string;

  /**
   * @schema DescribeUserStackAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeUserStackAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeUserStackAssociationsResult
 */
export interface DescribeUserStackAssociationsResult {
  /**
   * @schema DescribeUserStackAssociationsResult#UserStackAssociations
   */
  readonly userStackAssociations?: UserStackAssociation[];

  /**
   * @schema DescribeUserStackAssociationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeUsersRequest
 */
export interface DescribeUsersRequest {
  /**
   * @schema DescribeUsersRequest#AuthenticationType
   */
  readonly authenticationType: string;

  /**
   * @schema DescribeUsersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeUsersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeUsersResult
 */
export interface DescribeUsersResult {
  /**
   * @schema DescribeUsersResult#Users
   */
  readonly users?: User[];

  /**
   * @schema DescribeUsersResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DisableUserRequest
 */
export interface DisableUserRequest {
  /**
   * @schema DisableUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema DisableUserRequest#AuthenticationType
   */
  readonly authenticationType: string;

}

/**
 * @schema DisableUserResult
 */
export interface DisableUserResult {
}

/**
 * @schema DisassociateFleetRequest
 */
export interface DisassociateFleetRequest {
  /**
   * @schema DisassociateFleetRequest#FleetName
   */
  readonly fleetName: string;

  /**
   * @schema DisassociateFleetRequest#StackName
   */
  readonly stackName: string;

}

/**
 * @schema DisassociateFleetResult
 */
export interface DisassociateFleetResult {
}

/**
 * @schema EnableUserRequest
 */
export interface EnableUserRequest {
  /**
   * @schema EnableUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema EnableUserRequest#AuthenticationType
   */
  readonly authenticationType: string;

}

/**
 * @schema EnableUserResult
 */
export interface EnableUserResult {
}

/**
 * @schema ExpireSessionRequest
 */
export interface ExpireSessionRequest {
  /**
   * @schema ExpireSessionRequest#SessionId
   */
  readonly sessionId: string;

}

/**
 * @schema ExpireSessionResult
 */
export interface ExpireSessionResult {
}

/**
 * @schema ListAssociatedFleetsRequest
 */
export interface ListAssociatedFleetsRequest {
  /**
   * @schema ListAssociatedFleetsRequest#StackName
   */
  readonly stackName: string;

  /**
   * @schema ListAssociatedFleetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAssociatedFleetsResult
 */
export interface ListAssociatedFleetsResult {
  /**
   * @schema ListAssociatedFleetsResult#Names
   */
  readonly names?: string[];

  /**
   * @schema ListAssociatedFleetsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAssociatedStacksRequest
 */
export interface ListAssociatedStacksRequest {
  /**
   * @schema ListAssociatedStacksRequest#FleetName
   */
  readonly fleetName: string;

  /**
   * @schema ListAssociatedStacksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAssociatedStacksResult
 */
export interface ListAssociatedStacksResult {
  /**
   * @schema ListAssociatedStacksResult#Names
   */
  readonly names?: string[];

  /**
   * @schema ListAssociatedStacksResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema StartFleetRequest
 */
export interface StartFleetRequest {
  /**
   * @schema StartFleetRequest#Name
   */
  readonly name: string;

}

/**
 * @schema StartFleetResult
 */
export interface StartFleetResult {
}

/**
 * @schema StartImageBuilderRequest
 */
export interface StartImageBuilderRequest {
  /**
   * @schema StartImageBuilderRequest#Name
   */
  readonly name: string;

  /**
   * @schema StartImageBuilderRequest#AppstreamAgentVersion
   */
  readonly appstreamAgentVersion?: string;

}

/**
 * @schema StartImageBuilderResult
 */
export interface StartImageBuilderResult {
  /**
   * @schema StartImageBuilderResult#ImageBuilder
   */
  readonly imageBuilder?: ImageBuilder;

}

/**
 * @schema StopFleetRequest
 */
export interface StopFleetRequest {
  /**
   * @schema StopFleetRequest#Name
   */
  readonly name: string;

}

/**
 * @schema StopFleetResult
 */
export interface StopFleetResult {
}

/**
 * @schema StopImageBuilderRequest
 */
export interface StopImageBuilderRequest {
  /**
   * @schema StopImageBuilderRequest#Name
   */
  readonly name: string;

}

/**
 * @schema StopImageBuilderResult
 */
export interface StopImageBuilderResult {
  /**
   * @schema StopImageBuilderResult#ImageBuilder
   */
  readonly imageBuilder?: ImageBuilder;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateDirectoryConfigRequest
 */
export interface UpdateDirectoryConfigRequest {
  /**
   * @schema UpdateDirectoryConfigRequest#DirectoryName
   */
  readonly directoryName: string;

  /**
   * @schema UpdateDirectoryConfigRequest#OrganizationalUnitDistinguishedNames
   */
  readonly organizationalUnitDistinguishedNames?: string[];

  /**
   * @schema UpdateDirectoryConfigRequest#ServiceAccountCredentials
   */
  readonly serviceAccountCredentials?: ServiceAccountCredentials;

}

/**
 * @schema UpdateDirectoryConfigResult
 */
export interface UpdateDirectoryConfigResult {
  /**
   * @schema UpdateDirectoryConfigResult#DirectoryConfig
   */
  readonly directoryConfig?: DirectoryConfig;

}

/**
 * @schema UpdateFleetRequest
 */
export interface UpdateFleetRequest {
  /**
   * @schema UpdateFleetRequest#ImageName
   */
  readonly imageName?: string;

  /**
   * @schema UpdateFleetRequest#ImageArn
   */
  readonly imageArn?: string;

  /**
   * @schema UpdateFleetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateFleetRequest#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema UpdateFleetRequest#ComputeCapacity
   */
  readonly computeCapacity?: ComputeCapacity;

  /**
   * @schema UpdateFleetRequest#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

  /**
   * @schema UpdateFleetRequest#MaxUserDurationInSeconds
   */
  readonly maxUserDurationInSeconds?: number;

  /**
   * @schema UpdateFleetRequest#DisconnectTimeoutInSeconds
   */
  readonly disconnectTimeoutInSeconds?: number;

  /**
   * @schema UpdateFleetRequest#DeleteVpcConfig
   */
  readonly deleteVpcConfig?: boolean;

  /**
   * @schema UpdateFleetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateFleetRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema UpdateFleetRequest#EnableDefaultInternetAccess
   */
  readonly enableDefaultInternetAccess?: boolean;

  /**
   * @schema UpdateFleetRequest#DomainJoinInfo
   */
  readonly domainJoinInfo?: DomainJoinInfo;

  /**
   * @schema UpdateFleetRequest#IdleDisconnectTimeoutInSeconds
   */
  readonly idleDisconnectTimeoutInSeconds?: number;

  /**
   * @schema UpdateFleetRequest#AttributesToDelete
   */
  readonly attributesToDelete?: string[];

  /**
   * @schema UpdateFleetRequest#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema UpdateFleetRequest#StreamView
   */
  readonly streamView?: string;

}

/**
 * @schema UpdateFleetResult
 */
export interface UpdateFleetResult {
  /**
   * @schema UpdateFleetResult#Fleet
   */
  readonly fleet?: Fleet;

}

/**
 * @schema UpdateImagePermissionsRequest
 */
export interface UpdateImagePermissionsRequest {
  /**
   * @schema UpdateImagePermissionsRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateImagePermissionsRequest#SharedAccountId
   */
  readonly sharedAccountId: string;

  /**
   * @schema UpdateImagePermissionsRequest#ImagePermissions
   */
  readonly imagePermissions: ImagePermissions;

}

/**
 * @schema UpdateImagePermissionsResult
 */
export interface UpdateImagePermissionsResult {
}

/**
 * @schema UpdateStackRequest
 */
export interface UpdateStackRequest {
  /**
   * @schema UpdateStackRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema UpdateStackRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateStackRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateStackRequest#StorageConnectors
   */
  readonly storageConnectors?: StorageConnector[];

  /**
   * @schema UpdateStackRequest#DeleteStorageConnectors
   */
  readonly deleteStorageConnectors?: boolean;

  /**
   * @schema UpdateStackRequest#RedirectURL
   */
  readonly redirectUrl?: string;

  /**
   * @schema UpdateStackRequest#FeedbackURL
   */
  readonly feedbackUrl?: string;

  /**
   * @schema UpdateStackRequest#AttributesToDelete
   */
  readonly attributesToDelete?: string[];

  /**
   * @schema UpdateStackRequest#UserSettings
   */
  readonly userSettings?: UserSetting[];

  /**
   * @schema UpdateStackRequest#ApplicationSettings
   */
  readonly applicationSettings?: ApplicationSettings;

  /**
   * @schema UpdateStackRequest#AccessEndpoints
   */
  readonly accessEndpoints?: AccessEndpoint[];

  /**
   * @schema UpdateStackRequest#EmbedHostDomains
   */
  readonly embedHostDomains?: string[];

}

/**
 * @schema UpdateStackResult
 */
export interface UpdateStackResult {
  /**
   * @schema UpdateStackResult#Stack
   */
  readonly stack?: Stack;

}

/**
 * @schema UserStackAssociation
 */
export interface UserStackAssociation {
  /**
   * @schema UserStackAssociation#StackName
   */
  readonly stackName: string;

  /**
   * @schema UserStackAssociation#UserName
   */
  readonly userName: string;

  /**
   * @schema UserStackAssociation#AuthenticationType
   */
  readonly authenticationType: string;

  /**
   * @schema UserStackAssociation#SendEmailNotification
   */
  readonly sendEmailNotification?: boolean;

}

/**
 * @schema UserStackAssociationError
 */
export interface UserStackAssociationError {
  /**
   * @schema UserStackAssociationError#UserStackAssociation
   */
  readonly userStackAssociation?: UserStackAssociation;

  /**
   * @schema UserStackAssociationError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema UserStackAssociationError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema ServiceAccountCredentials
 */
export interface ServiceAccountCredentials {
  /**
   * @schema ServiceAccountCredentials#AccountName
   */
  readonly accountName: string;

  /**
   * @schema ServiceAccountCredentials#AccountPassword
   */
  readonly accountPassword: string;

}

/**
 * @schema DirectoryConfig
 */
export interface DirectoryConfig {
  /**
   * @schema DirectoryConfig#DirectoryName
   */
  readonly directoryName: string;

  /**
   * @schema DirectoryConfig#OrganizationalUnitDistinguishedNames
   */
  readonly organizationalUnitDistinguishedNames?: string[];

  /**
   * @schema DirectoryConfig#ServiceAccountCredentials
   */
  readonly serviceAccountCredentials?: ServiceAccountCredentials;

  /**
   * @schema DirectoryConfig#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * @schema ComputeCapacity
 */
export interface ComputeCapacity {
  /**
   * @schema ComputeCapacity#DesiredInstances
   */
  readonly desiredInstances: number;

}

/**
 * @schema VpcConfig
 */
export interface VpcConfig {
  /**
   * @schema VpcConfig#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema VpcConfig#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * @schema DomainJoinInfo
 */
export interface DomainJoinInfo {
  /**
   * @schema DomainJoinInfo#DirectoryName
   */
  readonly directoryName?: string;

  /**
   * @schema DomainJoinInfo#OrganizationalUnitDistinguishedName
   */
  readonly organizationalUnitDistinguishedName?: string;

}

/**
 * @schema Fleet
 */
export interface Fleet {
  /**
   * @schema Fleet#Arn
   */
  readonly arn: string;

  /**
   * @schema Fleet#Name
   */
  readonly name: string;

  /**
   * @schema Fleet#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema Fleet#Description
   */
  readonly description?: string;

  /**
   * @schema Fleet#ImageName
   */
  readonly imageName?: string;

  /**
   * @schema Fleet#ImageArn
   */
  readonly imageArn?: string;

  /**
   * @schema Fleet#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema Fleet#FleetType
   */
  readonly fleetType?: string;

  /**
   * @schema Fleet#ComputeCapacityStatus
   */
  readonly computeCapacityStatus: ComputeCapacityStatus;

  /**
   * @schema Fleet#MaxUserDurationInSeconds
   */
  readonly maxUserDurationInSeconds?: number;

  /**
   * @schema Fleet#DisconnectTimeoutInSeconds
   */
  readonly disconnectTimeoutInSeconds?: number;

  /**
   * @schema Fleet#State
   */
  readonly state: string;

  /**
   * @schema Fleet#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

  /**
   * @schema Fleet#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema Fleet#FleetErrors
   */
  readonly fleetErrors?: FleetError[];

  /**
   * @schema Fleet#EnableDefaultInternetAccess
   */
  readonly enableDefaultInternetAccess?: boolean;

  /**
   * @schema Fleet#DomainJoinInfo
   */
  readonly domainJoinInfo?: DomainJoinInfo;

  /**
   * @schema Fleet#IdleDisconnectTimeoutInSeconds
   */
  readonly idleDisconnectTimeoutInSeconds?: number;

  /**
   * @schema Fleet#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema Fleet#StreamView
   */
  readonly streamView?: string;

}

/**
 * @schema AccessEndpoint
 */
export interface AccessEndpoint {
  /**
   * @schema AccessEndpoint#EndpointType
   */
  readonly endpointType: string;

  /**
   * @schema AccessEndpoint#VpceId
   */
  readonly vpceId?: string;

}

/**
 * @schema ImageBuilder
 */
export interface ImageBuilder {
  /**
   * @schema ImageBuilder#Name
   */
  readonly name: string;

  /**
   * @schema ImageBuilder#Arn
   */
  readonly arn?: string;

  /**
   * @schema ImageBuilder#ImageArn
   */
  readonly imageArn?: string;

  /**
   * @schema ImageBuilder#Description
   */
  readonly description?: string;

  /**
   * @schema ImageBuilder#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema ImageBuilder#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

  /**
   * @schema ImageBuilder#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema ImageBuilder#Platform
   */
  readonly platform?: string;

  /**
   * @schema ImageBuilder#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema ImageBuilder#State
   */
  readonly state?: string;

  /**
   * @schema ImageBuilder#StateChangeReason
   */
  readonly stateChangeReason?: ImageBuilderStateChangeReason;

  /**
   * @schema ImageBuilder#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema ImageBuilder#EnableDefaultInternetAccess
   */
  readonly enableDefaultInternetAccess?: boolean;

  /**
   * @schema ImageBuilder#DomainJoinInfo
   */
  readonly domainJoinInfo?: DomainJoinInfo;

  /**
   * @schema ImageBuilder#NetworkAccessConfiguration
   */
  readonly networkAccessConfiguration?: NetworkAccessConfiguration;

  /**
   * @schema ImageBuilder#ImageBuilderErrors
   */
  readonly imageBuilderErrors?: ResourceError[];

  /**
   * @schema ImageBuilder#AppstreamAgentVersion
   */
  readonly appstreamAgentVersion?: string;

  /**
   * @schema ImageBuilder#AccessEndpoints
   */
  readonly accessEndpoints?: AccessEndpoint[];

}

/**
 * @schema StorageConnector
 */
export interface StorageConnector {
  /**
   * @schema StorageConnector#ConnectorType
   */
  readonly connectorType: string;

  /**
   * @schema StorageConnector#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema StorageConnector#Domains
   */
  readonly domains?: string[];

}

/**
 * @schema UserSetting
 */
export interface UserSetting {
  /**
   * @schema UserSetting#Action
   */
  readonly action: string;

  /**
   * @schema UserSetting#Permission
   */
  readonly permission: string;

}

/**
 * @schema ApplicationSettings
 */
export interface ApplicationSettings {
  /**
   * @schema ApplicationSettings#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema ApplicationSettings#SettingsGroup
   */
  readonly settingsGroup?: string;

}

/**
 * @schema Stack
 */
export interface Stack {
  /**
   * @schema Stack#Arn
   */
  readonly arn?: string;

  /**
   * @schema Stack#Name
   */
  readonly name: string;

  /**
   * @schema Stack#Description
   */
  readonly description?: string;

  /**
   * @schema Stack#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema Stack#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema Stack#StorageConnectors
   */
  readonly storageConnectors?: StorageConnector[];

  /**
   * @schema Stack#RedirectURL
   */
  readonly redirectUrl?: string;

  /**
   * @schema Stack#FeedbackURL
   */
  readonly feedbackUrl?: string;

  /**
   * @schema Stack#StackErrors
   */
  readonly stackErrors?: StackError[];

  /**
   * @schema Stack#UserSettings
   */
  readonly userSettings?: UserSetting[];

  /**
   * @schema Stack#ApplicationSettings
   */
  readonly applicationSettings?: ApplicationSettingsResponse;

  /**
   * @schema Stack#AccessEndpoints
   */
  readonly accessEndpoints?: AccessEndpoint[];

  /**
   * @schema Stack#EmbedHostDomains
   */
  readonly embedHostDomains?: string[];

}

/**
 * @schema Image
 */
export interface Image {
  /**
   * @schema Image#Name
   */
  readonly name: string;

  /**
   * @schema Image#Arn
   */
  readonly arn?: string;

  /**
   * @schema Image#BaseImageArn
   */
  readonly baseImageArn?: string;

  /**
   * @schema Image#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema Image#State
   */
  readonly state?: string;

  /**
   * @schema Image#Visibility
   */
  readonly visibility?: string;

  /**
   * @schema Image#ImageBuilderSupported
   */
  readonly imageBuilderSupported?: boolean;

  /**
   * @schema Image#ImageBuilderName
   */
  readonly imageBuilderName?: string;

  /**
   * @schema Image#Platform
   */
  readonly platform?: string;

  /**
   * @schema Image#Description
   */
  readonly description?: string;

  /**
   * @schema Image#StateChangeReason
   */
  readonly stateChangeReason?: ImageStateChangeReason;

  /**
   * @schema Image#Applications
   */
  readonly applications?: Application[];

  /**
   * @schema Image#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema Image#PublicBaseImageReleasedDate
   */
  readonly publicBaseImageReleasedDate?: string;

  /**
   * @schema Image#AppstreamAgentVersion
   */
  readonly appstreamAgentVersion?: string;

  /**
   * @schema Image#ImagePermissions
   */
  readonly imagePermissions?: ImagePermissions;

}

/**
 * @schema SharedImagePermissions
 */
export interface SharedImagePermissions {
  /**
   * @schema SharedImagePermissions#sharedAccountId
   */
  readonly sharedAccountId: string;

  /**
   * @schema SharedImagePermissions#imagePermissions
   */
  readonly imagePermissions: ImagePermissions;

}

/**
 * @schema Session
 */
export interface Session {
  /**
   * @schema Session#Id
   */
  readonly id: string;

  /**
   * @schema Session#UserId
   */
  readonly userId: string;

  /**
   * @schema Session#StackName
   */
  readonly stackName: string;

  /**
   * @schema Session#FleetName
   */
  readonly fleetName: string;

  /**
   * @schema Session#State
   */
  readonly state: string;

  /**
   * @schema Session#ConnectionState
   */
  readonly connectionState?: string;

  /**
   * @schema Session#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema Session#MaxExpirationTime
   */
  readonly maxExpirationTime?: string;

  /**
   * @schema Session#AuthenticationType
   */
  readonly authenticationType?: string;

  /**
   * @schema Session#NetworkAccessConfiguration
   */
  readonly networkAccessConfiguration?: NetworkAccessConfiguration;

}

/**
 * @schema UsageReportSubscription
 */
export interface UsageReportSubscription {
  /**
   * @schema UsageReportSubscription#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema UsageReportSubscription#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema UsageReportSubscription#LastGeneratedReportDate
   */
  readonly lastGeneratedReportDate?: string;

  /**
   * @schema UsageReportSubscription#SubscriptionErrors
   */
  readonly subscriptionErrors?: LastReportGenerationExecutionError[];

}

/**
 * @schema User
 */
export interface User {
  /**
   * @schema User#Arn
   */
  readonly arn?: string;

  /**
   * @schema User#UserName
   */
  readonly userName?: string;

  /**
   * @schema User#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema User#Status
   */
  readonly status?: string;

  /**
   * @schema User#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema User#LastName
   */
  readonly lastName?: string;

  /**
   * @schema User#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema User#AuthenticationType
   */
  readonly authenticationType: string;

}

/**
 * @schema ImagePermissions
 */
export interface ImagePermissions {
  /**
   * @schema ImagePermissions#allowFleet
   */
  readonly allowFleet?: boolean;

  /**
   * @schema ImagePermissions#allowImageBuilder
   */
  readonly allowImageBuilder?: boolean;

}

/**
 * @schema ComputeCapacityStatus
 */
export interface ComputeCapacityStatus {
  /**
   * @schema ComputeCapacityStatus#Desired
   */
  readonly desired: number;

  /**
   * @schema ComputeCapacityStatus#Running
   */
  readonly running?: number;

  /**
   * @schema ComputeCapacityStatus#InUse
   */
  readonly inUse?: number;

  /**
   * @schema ComputeCapacityStatus#Available
   */
  readonly available?: number;

}

/**
 * @schema FleetError
 */
export interface FleetError {
  /**
   * @schema FleetError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema FleetError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema ImageBuilderStateChangeReason
 */
export interface ImageBuilderStateChangeReason {
  /**
   * @schema ImageBuilderStateChangeReason#Code
   */
  readonly code?: string;

  /**
   * @schema ImageBuilderStateChangeReason#Message
   */
  readonly message?: string;

}

/**
 * @schema NetworkAccessConfiguration
 */
export interface NetworkAccessConfiguration {
  /**
   * @schema NetworkAccessConfiguration#EniPrivateIpAddress
   */
  readonly eniPrivateIpAddress?: string;

  /**
   * @schema NetworkAccessConfiguration#EniId
   */
  readonly eniId?: string;

}

/**
 * @schema ResourceError
 */
export interface ResourceError {
  /**
   * @schema ResourceError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ResourceError#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema ResourceError#ErrorTimestamp
   */
  readonly errorTimestamp?: string;

}

/**
 * @schema StackError
 */
export interface StackError {
  /**
   * @schema StackError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema StackError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema ApplicationSettingsResponse
 */
export interface ApplicationSettingsResponse {
  /**
   * @schema ApplicationSettingsResponse#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema ApplicationSettingsResponse#SettingsGroup
   */
  readonly settingsGroup?: string;

  /**
   * @schema ApplicationSettingsResponse#S3BucketName
   */
  readonly s3BucketName?: string;

}

/**
 * @schema ImageStateChangeReason
 */
export interface ImageStateChangeReason {
  /**
   * @schema ImageStateChangeReason#Code
   */
  readonly code?: string;

  /**
   * @schema ImageStateChangeReason#Message
   */
  readonly message?: string;

}

/**
 * @schema Application
 */
export interface Application {
  /**
   * @schema Application#Name
   */
  readonly name?: string;

  /**
   * @schema Application#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema Application#IconURL
   */
  readonly iconUrl?: string;

  /**
   * @schema Application#LaunchPath
   */
  readonly launchPath?: string;

  /**
   * @schema Application#LaunchParameters
   */
  readonly launchParameters?: string;

  /**
   * @schema Application#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema Application#Metadata
   */
  readonly metadata?: { [key: string]: string };

}

/**
 * @schema LastReportGenerationExecutionError
 */
export interface LastReportGenerationExecutionError {
  /**
   * @schema LastReportGenerationExecutionError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema LastReportGenerationExecutionError#ErrorMessage
   */
  readonly errorMessage?: string;

}
