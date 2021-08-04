/**
 * @schema AppStreamAssociateFleetRequest
 */
export interface AppStreamAssociateFleetRequest {
  /**
   * @schema AppStreamAssociateFleetRequest#FleetName
   */
  readonly fleetName: string;

  /**
   * @schema AppStreamAssociateFleetRequest#StackName
   */
  readonly stackName: string;

}

/**
 * @schema AppStreamAssociateFleetResult
 */
export interface AppStreamAssociateFleetResult {
}

/**
 * @schema AppStreamBatchAssociateUserStackRequest
 */
export interface AppStreamBatchAssociateUserStackRequest {
  /**
   * @schema AppStreamBatchAssociateUserStackRequest#UserStackAssociations
   */
  readonly userStackAssociations: AppStreamUserStackAssociation[];

}

/**
 * @schema AppStreamBatchAssociateUserStackResult
 */
export interface AppStreamBatchAssociateUserStackResult {
  /**
   * @schema AppStreamBatchAssociateUserStackResult#errors
   */
  readonly errors?: AppStreamUserStackAssociationError[];

}

/**
 * @schema AppStreamBatchDisassociateUserStackRequest
 */
export interface AppStreamBatchDisassociateUserStackRequest {
  /**
   * @schema AppStreamBatchDisassociateUserStackRequest#UserStackAssociations
   */
  readonly userStackAssociations: AppStreamUserStackAssociation[];

}

/**
 * @schema AppStreamBatchDisassociateUserStackResult
 */
export interface AppStreamBatchDisassociateUserStackResult {
  /**
   * @schema AppStreamBatchDisassociateUserStackResult#errors
   */
  readonly errors?: AppStreamUserStackAssociationError[];

}

/**
 * @schema AppStreamCopyImageRequest
 */
export interface AppStreamCopyImageRequest {
  /**
   * @schema AppStreamCopyImageRequest#SourceImageName
   */
  readonly sourceImageName: string;

  /**
   * @schema AppStreamCopyImageRequest#DestinationImageName
   */
  readonly destinationImageName: string;

  /**
   * @schema AppStreamCopyImageRequest#DestinationRegion
   */
  readonly destinationRegion: string;

  /**
   * @schema AppStreamCopyImageRequest#DestinationImageDescription
   */
  readonly destinationImageDescription?: string;

}

/**
 * @schema AppStreamCopyImageResponse
 */
export interface AppStreamCopyImageResponse {
  /**
   * @schema AppStreamCopyImageResponse#DestinationImageName
   */
  readonly destinationImageName?: string;

}

/**
 * @schema AppStreamCreateDirectoryConfigRequest
 */
export interface AppStreamCreateDirectoryConfigRequest {
  /**
   * @schema AppStreamCreateDirectoryConfigRequest#DirectoryName
   */
  readonly directoryName: string;

  /**
   * @schema AppStreamCreateDirectoryConfigRequest#OrganizationalUnitDistinguishedNames
   */
  readonly organizationalUnitDistinguishedNames: string[];

  /**
   * @schema AppStreamCreateDirectoryConfigRequest#ServiceAccountCredentials
   */
  readonly serviceAccountCredentials?: AppStreamServiceAccountCredentials;

}

/**
 * @schema AppStreamCreateDirectoryConfigResult
 */
export interface AppStreamCreateDirectoryConfigResult {
  /**
   * @schema AppStreamCreateDirectoryConfigResult#DirectoryConfig
   */
  readonly directoryConfig?: AppStreamDirectoryConfig;

}

/**
 * @schema AppStreamCreateFleetRequest
 */
export interface AppStreamCreateFleetRequest {
  /**
   * @schema AppStreamCreateFleetRequest#Name
   */
  readonly name: string;

  /**
   * @schema AppStreamCreateFleetRequest#ImageName
   */
  readonly imageName?: string;

  /**
   * @schema AppStreamCreateFleetRequest#ImageArn
   */
  readonly imageArn?: string;

  /**
   * @schema AppStreamCreateFleetRequest#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema AppStreamCreateFleetRequest#FleetType
   */
  readonly fleetType?: string;

  /**
   * @schema AppStreamCreateFleetRequest#ComputeCapacity
   */
  readonly computeCapacity: AppStreamComputeCapacity;

  /**
   * @schema AppStreamCreateFleetRequest#VpcConfig
   */
  readonly vpcConfig?: AppStreamVpcConfig;

  /**
   * @schema AppStreamCreateFleetRequest#MaxUserDurationInSeconds
   */
  readonly maxUserDurationInSeconds?: number;

  /**
   * @schema AppStreamCreateFleetRequest#DisconnectTimeoutInSeconds
   */
  readonly disconnectTimeoutInSeconds?: number;

  /**
   * @schema AppStreamCreateFleetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AppStreamCreateFleetRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AppStreamCreateFleetRequest#EnableDefaultInternetAccess
   */
  readonly enableDefaultInternetAccess?: boolean;

  /**
   * @schema AppStreamCreateFleetRequest#DomainJoinInfo
   */
  readonly domainJoinInfo?: AppStreamDomainJoinInfo;

  /**
   * @schema AppStreamCreateFleetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema AppStreamCreateFleetRequest#IdleDisconnectTimeoutInSeconds
   */
  readonly idleDisconnectTimeoutInSeconds?: number;

  /**
   * @schema AppStreamCreateFleetRequest#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema AppStreamCreateFleetRequest#StreamView
   */
  readonly streamView?: string;

}

/**
 * @schema AppStreamCreateFleetResult
 */
export interface AppStreamCreateFleetResult {
  /**
   * @schema AppStreamCreateFleetResult#Fleet
   */
  readonly fleet?: AppStreamFleet;

}

/**
 * @schema AppStreamCreateImageBuilderRequest
 */
export interface AppStreamCreateImageBuilderRequest {
  /**
   * @schema AppStreamCreateImageBuilderRequest#Name
   */
  readonly name: string;

  /**
   * @schema AppStreamCreateImageBuilderRequest#ImageName
   */
  readonly imageName?: string;

  /**
   * @schema AppStreamCreateImageBuilderRequest#ImageArn
   */
  readonly imageArn?: string;

  /**
   * @schema AppStreamCreateImageBuilderRequest#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema AppStreamCreateImageBuilderRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AppStreamCreateImageBuilderRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AppStreamCreateImageBuilderRequest#VpcConfig
   */
  readonly vpcConfig?: AppStreamVpcConfig;

  /**
   * @schema AppStreamCreateImageBuilderRequest#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema AppStreamCreateImageBuilderRequest#EnableDefaultInternetAccess
   */
  readonly enableDefaultInternetAccess?: boolean;

  /**
   * @schema AppStreamCreateImageBuilderRequest#DomainJoinInfo
   */
  readonly domainJoinInfo?: AppStreamDomainJoinInfo;

  /**
   * @schema AppStreamCreateImageBuilderRequest#AppstreamAgentVersion
   */
  readonly appstreamAgentVersion?: string;

  /**
   * @schema AppStreamCreateImageBuilderRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema AppStreamCreateImageBuilderRequest#AccessEndpoints
   */
  readonly accessEndpoints?: AppStreamAccessEndpoint[];

}

/**
 * @schema AppStreamCreateImageBuilderResult
 */
export interface AppStreamCreateImageBuilderResult {
  /**
   * @schema AppStreamCreateImageBuilderResult#ImageBuilder
   */
  readonly imageBuilder?: AppStreamImageBuilder;

}

/**
 * @schema AppStreamCreateImageBuilderStreamingUrlRequest
 */
export interface AppStreamCreateImageBuilderStreamingUrlRequest {
  /**
   * @schema AppStreamCreateImageBuilderStreamingUrlRequest#Name
   */
  readonly name: string;

  /**
   * @schema AppStreamCreateImageBuilderStreamingUrlRequest#Validity
   */
  readonly validity?: number;

}

/**
 * @schema AppStreamCreateImageBuilderStreamingUrlResult
 */
export interface AppStreamCreateImageBuilderStreamingUrlResult {
  /**
   * @schema AppStreamCreateImageBuilderStreamingUrlResult#StreamingURL
   */
  readonly streamingUrl?: string;

  /**
   * @schema AppStreamCreateImageBuilderStreamingUrlResult#Expires
   */
  readonly expires?: string;

}

/**
 * @schema AppStreamCreateStackRequest
 */
export interface AppStreamCreateStackRequest {
  /**
   * @schema AppStreamCreateStackRequest#Name
   */
  readonly name: string;

  /**
   * @schema AppStreamCreateStackRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AppStreamCreateStackRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AppStreamCreateStackRequest#StorageConnectors
   */
  readonly storageConnectors?: AppStreamStorageConnector[];

  /**
   * @schema AppStreamCreateStackRequest#RedirectURL
   */
  readonly redirectUrl?: string;

  /**
   * @schema AppStreamCreateStackRequest#FeedbackURL
   */
  readonly feedbackUrl?: string;

  /**
   * @schema AppStreamCreateStackRequest#UserSettings
   */
  readonly userSettings?: AppStreamUserSetting[];

  /**
   * @schema AppStreamCreateStackRequest#ApplicationSettings
   */
  readonly applicationSettings?: AppStreamApplicationSettings;

  /**
   * @schema AppStreamCreateStackRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema AppStreamCreateStackRequest#AccessEndpoints
   */
  readonly accessEndpoints?: AppStreamAccessEndpoint[];

  /**
   * @schema AppStreamCreateStackRequest#EmbedHostDomains
   */
  readonly embedHostDomains?: string[];

}

/**
 * @schema AppStreamCreateStackResult
 */
export interface AppStreamCreateStackResult {
  /**
   * @schema AppStreamCreateStackResult#Stack
   */
  readonly stack?: AppStreamStack;

}

/**
 * @schema AppStreamCreateStreamingUrlRequest
 */
export interface AppStreamCreateStreamingUrlRequest {
  /**
   * @schema AppStreamCreateStreamingUrlRequest#StackName
   */
  readonly stackName: string;

  /**
   * @schema AppStreamCreateStreamingUrlRequest#FleetName
   */
  readonly fleetName: string;

  /**
   * @schema AppStreamCreateStreamingUrlRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema AppStreamCreateStreamingUrlRequest#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppStreamCreateStreamingUrlRequest#Validity
   */
  readonly validity?: number;

  /**
   * @schema AppStreamCreateStreamingUrlRequest#SessionContext
   */
  readonly sessionContext?: string;

}

/**
 * @schema AppStreamCreateStreamingUrlResult
 */
export interface AppStreamCreateStreamingUrlResult {
  /**
   * @schema AppStreamCreateStreamingUrlResult#StreamingURL
   */
  readonly streamingUrl?: string;

  /**
   * @schema AppStreamCreateStreamingUrlResult#Expires
   */
  readonly expires?: string;

}

/**
 * @schema AppStreamCreateUsageReportSubscriptionRequest
 */
export interface AppStreamCreateUsageReportSubscriptionRequest {
}

/**
 * @schema AppStreamCreateUsageReportSubscriptionResult
 */
export interface AppStreamCreateUsageReportSubscriptionResult {
  /**
   * @schema AppStreamCreateUsageReportSubscriptionResult#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema AppStreamCreateUsageReportSubscriptionResult#Schedule
   */
  readonly schedule?: string;

}

/**
 * @schema AppStreamCreateUserRequest
 */
export interface AppStreamCreateUserRequest {
  /**
   * @schema AppStreamCreateUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema AppStreamCreateUserRequest#MessageAction
   */
  readonly messageAction?: string;

  /**
   * @schema AppStreamCreateUserRequest#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema AppStreamCreateUserRequest#LastName
   */
  readonly lastName?: string;

  /**
   * @schema AppStreamCreateUserRequest#AuthenticationType
   */
  readonly authenticationType: string;

}

/**
 * @schema AppStreamCreateUserResult
 */
export interface AppStreamCreateUserResult {
}

/**
 * @schema AppStreamDeleteDirectoryConfigRequest
 */
export interface AppStreamDeleteDirectoryConfigRequest {
  /**
   * @schema AppStreamDeleteDirectoryConfigRequest#DirectoryName
   */
  readonly directoryName: string;

}

/**
 * @schema AppStreamDeleteDirectoryConfigResult
 */
export interface AppStreamDeleteDirectoryConfigResult {
}

/**
 * @schema AppStreamDeleteFleetRequest
 */
export interface AppStreamDeleteFleetRequest {
  /**
   * @schema AppStreamDeleteFleetRequest#Name
   */
  readonly name: string;

}

/**
 * @schema AppStreamDeleteFleetResult
 */
export interface AppStreamDeleteFleetResult {
}

/**
 * @schema AppStreamDeleteImageRequest
 */
export interface AppStreamDeleteImageRequest {
  /**
   * @schema AppStreamDeleteImageRequest#Name
   */
  readonly name: string;

}

/**
 * @schema AppStreamDeleteImageResult
 */
export interface AppStreamDeleteImageResult {
  /**
   * @schema AppStreamDeleteImageResult#Image
   */
  readonly image?: AppStreamImage;

}

/**
 * @schema AppStreamDeleteImageBuilderRequest
 */
export interface AppStreamDeleteImageBuilderRequest {
  /**
   * @schema AppStreamDeleteImageBuilderRequest#Name
   */
  readonly name: string;

}

/**
 * @schema AppStreamDeleteImageBuilderResult
 */
export interface AppStreamDeleteImageBuilderResult {
  /**
   * @schema AppStreamDeleteImageBuilderResult#ImageBuilder
   */
  readonly imageBuilder?: AppStreamImageBuilder;

}

/**
 * @schema AppStreamDeleteImagePermissionsRequest
 */
export interface AppStreamDeleteImagePermissionsRequest {
  /**
   * @schema AppStreamDeleteImagePermissionsRequest#Name
   */
  readonly name: string;

  /**
   * @schema AppStreamDeleteImagePermissionsRequest#SharedAccountId
   */
  readonly sharedAccountId: string;

}

/**
 * @schema AppStreamDeleteImagePermissionsResult
 */
export interface AppStreamDeleteImagePermissionsResult {
}

/**
 * @schema AppStreamDeleteStackRequest
 */
export interface AppStreamDeleteStackRequest {
  /**
   * @schema AppStreamDeleteStackRequest#Name
   */
  readonly name: string;

}

/**
 * @schema AppStreamDeleteStackResult
 */
export interface AppStreamDeleteStackResult {
}

/**
 * @schema AppStreamDeleteUsageReportSubscriptionRequest
 */
export interface AppStreamDeleteUsageReportSubscriptionRequest {
}

/**
 * @schema AppStreamDeleteUsageReportSubscriptionResult
 */
export interface AppStreamDeleteUsageReportSubscriptionResult {
}

/**
 * @schema AppStreamDeleteUserRequest
 */
export interface AppStreamDeleteUserRequest {
  /**
   * @schema AppStreamDeleteUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema AppStreamDeleteUserRequest#AuthenticationType
   */
  readonly authenticationType: string;

}

/**
 * @schema AppStreamDeleteUserResult
 */
export interface AppStreamDeleteUserResult {
}

/**
 * @schema AppStreamDescribeDirectoryConfigsRequest
 */
export interface AppStreamDescribeDirectoryConfigsRequest {
  /**
   * @schema AppStreamDescribeDirectoryConfigsRequest#DirectoryNames
   */
  readonly directoryNames?: string[];

  /**
   * @schema AppStreamDescribeDirectoryConfigsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppStreamDescribeDirectoryConfigsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppStreamDescribeDirectoryConfigsResult
 */
export interface AppStreamDescribeDirectoryConfigsResult {
  /**
   * @schema AppStreamDescribeDirectoryConfigsResult#DirectoryConfigs
   */
  readonly directoryConfigs?: AppStreamDirectoryConfig[];

  /**
   * @schema AppStreamDescribeDirectoryConfigsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppStreamDescribeFleetsRequest
 */
export interface AppStreamDescribeFleetsRequest {
  /**
   * @schema AppStreamDescribeFleetsRequest#Names
   */
  readonly names?: string[];

  /**
   * @schema AppStreamDescribeFleetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppStreamDescribeFleetsResult
 */
export interface AppStreamDescribeFleetsResult {
  /**
   * @schema AppStreamDescribeFleetsResult#Fleets
   */
  readonly fleets?: AppStreamFleet[];

  /**
   * @schema AppStreamDescribeFleetsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppStreamDescribeImageBuildersRequest
 */
export interface AppStreamDescribeImageBuildersRequest {
  /**
   * @schema AppStreamDescribeImageBuildersRequest#Names
   */
  readonly names?: string[];

  /**
   * @schema AppStreamDescribeImageBuildersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppStreamDescribeImageBuildersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppStreamDescribeImageBuildersResult
 */
export interface AppStreamDescribeImageBuildersResult {
  /**
   * @schema AppStreamDescribeImageBuildersResult#ImageBuilders
   */
  readonly imageBuilders?: AppStreamImageBuilder[];

  /**
   * @schema AppStreamDescribeImageBuildersResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppStreamDescribeImagePermissionsRequest
 */
export interface AppStreamDescribeImagePermissionsRequest {
  /**
   * @schema AppStreamDescribeImagePermissionsRequest#Name
   */
  readonly name: string;

  /**
   * @schema AppStreamDescribeImagePermissionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppStreamDescribeImagePermissionsRequest#SharedAwsAccountIds
   */
  readonly sharedAwsAccountIds?: string[];

  /**
   * @schema AppStreamDescribeImagePermissionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppStreamDescribeImagePermissionsResult
 */
export interface AppStreamDescribeImagePermissionsResult {
  /**
   * @schema AppStreamDescribeImagePermissionsResult#Name
   */
  readonly name?: string;

  /**
   * @schema AppStreamDescribeImagePermissionsResult#SharedImagePermissionsList
   */
  readonly sharedImagePermissionsList?: AppStreamSharedImagePermissions[];

  /**
   * @schema AppStreamDescribeImagePermissionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppStreamDescribeImagesRequest
 */
export interface AppStreamDescribeImagesRequest {
  /**
   * @schema AppStreamDescribeImagesRequest#Names
   */
  readonly names?: string[];

  /**
   * @schema AppStreamDescribeImagesRequest#Arns
   */
  readonly arns?: string[];

  /**
   * @schema AppStreamDescribeImagesRequest#Type
   */
  readonly type?: string;

  /**
   * @schema AppStreamDescribeImagesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppStreamDescribeImagesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AppStreamDescribeImagesResult
 */
export interface AppStreamDescribeImagesResult {
  /**
   * @schema AppStreamDescribeImagesResult#Images
   */
  readonly images?: AppStreamImage[];

  /**
   * @schema AppStreamDescribeImagesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppStreamDescribeSessionsRequest
 */
export interface AppStreamDescribeSessionsRequest {
  /**
   * @schema AppStreamDescribeSessionsRequest#StackName
   */
  readonly stackName: string;

  /**
   * @schema AppStreamDescribeSessionsRequest#FleetName
   */
  readonly fleetName: string;

  /**
   * @schema AppStreamDescribeSessionsRequest#UserId
   */
  readonly userId?: string;

  /**
   * @schema AppStreamDescribeSessionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppStreamDescribeSessionsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema AppStreamDescribeSessionsRequest#AuthenticationType
   */
  readonly authenticationType?: string;

}

/**
 * @schema AppStreamDescribeSessionsResult
 */
export interface AppStreamDescribeSessionsResult {
  /**
   * @schema AppStreamDescribeSessionsResult#Sessions
   */
  readonly sessions?: AppStreamSession[];

  /**
   * @schema AppStreamDescribeSessionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppStreamDescribeStacksRequest
 */
export interface AppStreamDescribeStacksRequest {
  /**
   * @schema AppStreamDescribeStacksRequest#Names
   */
  readonly names?: string[];

  /**
   * @schema AppStreamDescribeStacksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppStreamDescribeStacksResult
 */
export interface AppStreamDescribeStacksResult {
  /**
   * @schema AppStreamDescribeStacksResult#Stacks
   */
  readonly stacks?: AppStreamStack[];

  /**
   * @schema AppStreamDescribeStacksResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppStreamDescribeUsageReportSubscriptionsRequest
 */
export interface AppStreamDescribeUsageReportSubscriptionsRequest {
  /**
   * @schema AppStreamDescribeUsageReportSubscriptionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppStreamDescribeUsageReportSubscriptionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppStreamDescribeUsageReportSubscriptionsResult
 */
export interface AppStreamDescribeUsageReportSubscriptionsResult {
  /**
   * @schema AppStreamDescribeUsageReportSubscriptionsResult#UsageReportSubscriptions
   */
  readonly usageReportSubscriptions?: AppStreamUsageReportSubscription[];

  /**
   * @schema AppStreamDescribeUsageReportSubscriptionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppStreamDescribeUserStackAssociationsRequest
 */
export interface AppStreamDescribeUserStackAssociationsRequest {
  /**
   * @schema AppStreamDescribeUserStackAssociationsRequest#StackName
   */
  readonly stackName?: string;

  /**
   * @schema AppStreamDescribeUserStackAssociationsRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema AppStreamDescribeUserStackAssociationsRequest#AuthenticationType
   */
  readonly authenticationType?: string;

  /**
   * @schema AppStreamDescribeUserStackAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppStreamDescribeUserStackAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppStreamDescribeUserStackAssociationsResult
 */
export interface AppStreamDescribeUserStackAssociationsResult {
  /**
   * @schema AppStreamDescribeUserStackAssociationsResult#UserStackAssociations
   */
  readonly userStackAssociations?: AppStreamUserStackAssociation[];

  /**
   * @schema AppStreamDescribeUserStackAssociationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppStreamDescribeUsersRequest
 */
export interface AppStreamDescribeUsersRequest {
  /**
   * @schema AppStreamDescribeUsersRequest#AuthenticationType
   */
  readonly authenticationType: string;

  /**
   * @schema AppStreamDescribeUsersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppStreamDescribeUsersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppStreamDescribeUsersResult
 */
export interface AppStreamDescribeUsersResult {
  /**
   * @schema AppStreamDescribeUsersResult#Users
   */
  readonly users?: AppStreamUser[];

  /**
   * @schema AppStreamDescribeUsersResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppStreamDisableUserRequest
 */
export interface AppStreamDisableUserRequest {
  /**
   * @schema AppStreamDisableUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema AppStreamDisableUserRequest#AuthenticationType
   */
  readonly authenticationType: string;

}

/**
 * @schema AppStreamDisableUserResult
 */
export interface AppStreamDisableUserResult {
}

/**
 * @schema AppStreamDisassociateFleetRequest
 */
export interface AppStreamDisassociateFleetRequest {
  /**
   * @schema AppStreamDisassociateFleetRequest#FleetName
   */
  readonly fleetName: string;

  /**
   * @schema AppStreamDisassociateFleetRequest#StackName
   */
  readonly stackName: string;

}

/**
 * @schema AppStreamDisassociateFleetResult
 */
export interface AppStreamDisassociateFleetResult {
}

/**
 * @schema AppStreamEnableUserRequest
 */
export interface AppStreamEnableUserRequest {
  /**
   * @schema AppStreamEnableUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema AppStreamEnableUserRequest#AuthenticationType
   */
  readonly authenticationType: string;

}

/**
 * @schema AppStreamEnableUserResult
 */
export interface AppStreamEnableUserResult {
}

/**
 * @schema AppStreamExpireSessionRequest
 */
export interface AppStreamExpireSessionRequest {
  /**
   * @schema AppStreamExpireSessionRequest#SessionId
   */
  readonly sessionId: string;

}

/**
 * @schema AppStreamExpireSessionResult
 */
export interface AppStreamExpireSessionResult {
}

/**
 * @schema AppStreamListAssociatedFleetsRequest
 */
export interface AppStreamListAssociatedFleetsRequest {
  /**
   * @schema AppStreamListAssociatedFleetsRequest#StackName
   */
  readonly stackName: string;

  /**
   * @schema AppStreamListAssociatedFleetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppStreamListAssociatedFleetsResult
 */
export interface AppStreamListAssociatedFleetsResult {
  /**
   * @schema AppStreamListAssociatedFleetsResult#Names
   */
  readonly names?: string[];

  /**
   * @schema AppStreamListAssociatedFleetsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppStreamListAssociatedStacksRequest
 */
export interface AppStreamListAssociatedStacksRequest {
  /**
   * @schema AppStreamListAssociatedStacksRequest#FleetName
   */
  readonly fleetName: string;

  /**
   * @schema AppStreamListAssociatedStacksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppStreamListAssociatedStacksResult
 */
export interface AppStreamListAssociatedStacksResult {
  /**
   * @schema AppStreamListAssociatedStacksResult#Names
   */
  readonly names?: string[];

  /**
   * @schema AppStreamListAssociatedStacksResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppStreamListTagsForResourceRequest
 */
export interface AppStreamListTagsForResourceRequest {
  /**
   * @schema AppStreamListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema AppStreamListTagsForResourceResponse
 */
export interface AppStreamListTagsForResourceResponse {
  /**
   * @schema AppStreamListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema AppStreamStartFleetRequest
 */
export interface AppStreamStartFleetRequest {
  /**
   * @schema AppStreamStartFleetRequest#Name
   */
  readonly name: string;

}

/**
 * @schema AppStreamStartFleetResult
 */
export interface AppStreamStartFleetResult {
}

/**
 * @schema AppStreamStartImageBuilderRequest
 */
export interface AppStreamStartImageBuilderRequest {
  /**
   * @schema AppStreamStartImageBuilderRequest#Name
   */
  readonly name: string;

  /**
   * @schema AppStreamStartImageBuilderRequest#AppstreamAgentVersion
   */
  readonly appstreamAgentVersion?: string;

}

/**
 * @schema AppStreamStartImageBuilderResult
 */
export interface AppStreamStartImageBuilderResult {
  /**
   * @schema AppStreamStartImageBuilderResult#ImageBuilder
   */
  readonly imageBuilder?: AppStreamImageBuilder;

}

/**
 * @schema AppStreamStopFleetRequest
 */
export interface AppStreamStopFleetRequest {
  /**
   * @schema AppStreamStopFleetRequest#Name
   */
  readonly name: string;

}

/**
 * @schema AppStreamStopFleetResult
 */
export interface AppStreamStopFleetResult {
}

/**
 * @schema AppStreamStopImageBuilderRequest
 */
export interface AppStreamStopImageBuilderRequest {
  /**
   * @schema AppStreamStopImageBuilderRequest#Name
   */
  readonly name: string;

}

/**
 * @schema AppStreamStopImageBuilderResult
 */
export interface AppStreamStopImageBuilderResult {
  /**
   * @schema AppStreamStopImageBuilderResult#ImageBuilder
   */
  readonly imageBuilder?: AppStreamImageBuilder;

}

/**
 * @schema AppStreamTagResourceRequest
 */
export interface AppStreamTagResourceRequest {
  /**
   * @schema AppStreamTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AppStreamTagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema AppStreamTagResourceResponse
 */
export interface AppStreamTagResourceResponse {
}

/**
 * @schema AppStreamUntagResourceRequest
 */
export interface AppStreamUntagResourceRequest {
  /**
   * @schema AppStreamUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AppStreamUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema AppStreamUntagResourceResponse
 */
export interface AppStreamUntagResourceResponse {
}

/**
 * @schema AppStreamUpdateDirectoryConfigRequest
 */
export interface AppStreamUpdateDirectoryConfigRequest {
  /**
   * @schema AppStreamUpdateDirectoryConfigRequest#DirectoryName
   */
  readonly directoryName: string;

  /**
   * @schema AppStreamUpdateDirectoryConfigRequest#OrganizationalUnitDistinguishedNames
   */
  readonly organizationalUnitDistinguishedNames?: string[];

  /**
   * @schema AppStreamUpdateDirectoryConfigRequest#ServiceAccountCredentials
   */
  readonly serviceAccountCredentials?: AppStreamServiceAccountCredentials;

}

/**
 * @schema AppStreamUpdateDirectoryConfigResult
 */
export interface AppStreamUpdateDirectoryConfigResult {
  /**
   * @schema AppStreamUpdateDirectoryConfigResult#DirectoryConfig
   */
  readonly directoryConfig?: AppStreamDirectoryConfig;

}

/**
 * @schema AppStreamUpdateFleetRequest
 */
export interface AppStreamUpdateFleetRequest {
  /**
   * @schema AppStreamUpdateFleetRequest#ImageName
   */
  readonly imageName?: string;

  /**
   * @schema AppStreamUpdateFleetRequest#ImageArn
   */
  readonly imageArn?: string;

  /**
   * @schema AppStreamUpdateFleetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AppStreamUpdateFleetRequest#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema AppStreamUpdateFleetRequest#ComputeCapacity
   */
  readonly computeCapacity?: AppStreamComputeCapacity;

  /**
   * @schema AppStreamUpdateFleetRequest#VpcConfig
   */
  readonly vpcConfig?: AppStreamVpcConfig;

  /**
   * @schema AppStreamUpdateFleetRequest#MaxUserDurationInSeconds
   */
  readonly maxUserDurationInSeconds?: number;

  /**
   * @schema AppStreamUpdateFleetRequest#DisconnectTimeoutInSeconds
   */
  readonly disconnectTimeoutInSeconds?: number;

  /**
   * @schema AppStreamUpdateFleetRequest#DeleteVpcConfig
   */
  readonly deleteVpcConfig?: boolean;

  /**
   * @schema AppStreamUpdateFleetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AppStreamUpdateFleetRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AppStreamUpdateFleetRequest#EnableDefaultInternetAccess
   */
  readonly enableDefaultInternetAccess?: boolean;

  /**
   * @schema AppStreamUpdateFleetRequest#DomainJoinInfo
   */
  readonly domainJoinInfo?: AppStreamDomainJoinInfo;

  /**
   * @schema AppStreamUpdateFleetRequest#IdleDisconnectTimeoutInSeconds
   */
  readonly idleDisconnectTimeoutInSeconds?: number;

  /**
   * @schema AppStreamUpdateFleetRequest#AttributesToDelete
   */
  readonly attributesToDelete?: string[];

  /**
   * @schema AppStreamUpdateFleetRequest#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema AppStreamUpdateFleetRequest#StreamView
   */
  readonly streamView?: string;

}

/**
 * @schema AppStreamUpdateFleetResult
 */
export interface AppStreamUpdateFleetResult {
  /**
   * @schema AppStreamUpdateFleetResult#Fleet
   */
  readonly fleet?: AppStreamFleet;

}

/**
 * @schema AppStreamUpdateImagePermissionsRequest
 */
export interface AppStreamUpdateImagePermissionsRequest {
  /**
   * @schema AppStreamUpdateImagePermissionsRequest#Name
   */
  readonly name: string;

  /**
   * @schema AppStreamUpdateImagePermissionsRequest#SharedAccountId
   */
  readonly sharedAccountId: string;

  /**
   * @schema AppStreamUpdateImagePermissionsRequest#ImagePermissions
   */
  readonly imagePermissions: AppStreamImagePermissions;

}

/**
 * @schema AppStreamUpdateImagePermissionsResult
 */
export interface AppStreamUpdateImagePermissionsResult {
}

/**
 * @schema AppStreamUpdateStackRequest
 */
export interface AppStreamUpdateStackRequest {
  /**
   * @schema AppStreamUpdateStackRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AppStreamUpdateStackRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AppStreamUpdateStackRequest#Name
   */
  readonly name: string;

  /**
   * @schema AppStreamUpdateStackRequest#StorageConnectors
   */
  readonly storageConnectors?: AppStreamStorageConnector[];

  /**
   * @schema AppStreamUpdateStackRequest#DeleteStorageConnectors
   */
  readonly deleteStorageConnectors?: boolean;

  /**
   * @schema AppStreamUpdateStackRequest#RedirectURL
   */
  readonly redirectUrl?: string;

  /**
   * @schema AppStreamUpdateStackRequest#FeedbackURL
   */
  readonly feedbackUrl?: string;

  /**
   * @schema AppStreamUpdateStackRequest#AttributesToDelete
   */
  readonly attributesToDelete?: string[];

  /**
   * @schema AppStreamUpdateStackRequest#UserSettings
   */
  readonly userSettings?: AppStreamUserSetting[];

  /**
   * @schema AppStreamUpdateStackRequest#ApplicationSettings
   */
  readonly applicationSettings?: AppStreamApplicationSettings;

  /**
   * @schema AppStreamUpdateStackRequest#AccessEndpoints
   */
  readonly accessEndpoints?: AppStreamAccessEndpoint[];

  /**
   * @schema AppStreamUpdateStackRequest#EmbedHostDomains
   */
  readonly embedHostDomains?: string[];

}

/**
 * @schema AppStreamUpdateStackResult
 */
export interface AppStreamUpdateStackResult {
  /**
   * @schema AppStreamUpdateStackResult#Stack
   */
  readonly stack?: AppStreamStack;

}

/**
 * @schema AppStreamUserStackAssociation
 */
export interface AppStreamUserStackAssociation {
  /**
   * @schema AppStreamUserStackAssociation#StackName
   */
  readonly stackName: string;

  /**
   * @schema AppStreamUserStackAssociation#UserName
   */
  readonly userName: string;

  /**
   * @schema AppStreamUserStackAssociation#AuthenticationType
   */
  readonly authenticationType: string;

  /**
   * @schema AppStreamUserStackAssociation#SendEmailNotification
   */
  readonly sendEmailNotification?: boolean;

}

/**
 * @schema AppStreamUserStackAssociationError
 */
export interface AppStreamUserStackAssociationError {
  /**
   * @schema AppStreamUserStackAssociationError#UserStackAssociation
   */
  readonly userStackAssociation?: AppStreamUserStackAssociation;

  /**
   * @schema AppStreamUserStackAssociationError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema AppStreamUserStackAssociationError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema AppStreamServiceAccountCredentials
 */
export interface AppStreamServiceAccountCredentials {
  /**
   * @schema AppStreamServiceAccountCredentials#AccountName
   */
  readonly accountName: string;

  /**
   * @schema AppStreamServiceAccountCredentials#AccountPassword
   */
  readonly accountPassword: string;

}

/**
 * @schema AppStreamDirectoryConfig
 */
export interface AppStreamDirectoryConfig {
  /**
   * @schema AppStreamDirectoryConfig#DirectoryName
   */
  readonly directoryName: string;

  /**
   * @schema AppStreamDirectoryConfig#OrganizationalUnitDistinguishedNames
   */
  readonly organizationalUnitDistinguishedNames?: string[];

  /**
   * @schema AppStreamDirectoryConfig#ServiceAccountCredentials
   */
  readonly serviceAccountCredentials?: AppStreamServiceAccountCredentials;

  /**
   * @schema AppStreamDirectoryConfig#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * @schema AppStreamComputeCapacity
 */
export interface AppStreamComputeCapacity {
  /**
   * @schema AppStreamComputeCapacity#DesiredInstances
   */
  readonly desiredInstances: number;

}

/**
 * @schema AppStreamVpcConfig
 */
export interface AppStreamVpcConfig {
  /**
   * @schema AppStreamVpcConfig#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema AppStreamVpcConfig#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * @schema AppStreamDomainJoinInfo
 */
export interface AppStreamDomainJoinInfo {
  /**
   * @schema AppStreamDomainJoinInfo#DirectoryName
   */
  readonly directoryName?: string;

  /**
   * @schema AppStreamDomainJoinInfo#OrganizationalUnitDistinguishedName
   */
  readonly organizationalUnitDistinguishedName?: string;

}

/**
 * @schema AppStreamFleet
 */
export interface AppStreamFleet {
  /**
   * @schema AppStreamFleet#Arn
   */
  readonly arn: string;

  /**
   * @schema AppStreamFleet#Name
   */
  readonly name: string;

  /**
   * @schema AppStreamFleet#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AppStreamFleet#Description
   */
  readonly description?: string;

  /**
   * @schema AppStreamFleet#ImageName
   */
  readonly imageName?: string;

  /**
   * @schema AppStreamFleet#ImageArn
   */
  readonly imageArn?: string;

  /**
   * @schema AppStreamFleet#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema AppStreamFleet#FleetType
   */
  readonly fleetType?: string;

  /**
   * @schema AppStreamFleet#ComputeCapacityStatus
   */
  readonly computeCapacityStatus: AppStreamComputeCapacityStatus;

  /**
   * @schema AppStreamFleet#MaxUserDurationInSeconds
   */
  readonly maxUserDurationInSeconds?: number;

  /**
   * @schema AppStreamFleet#DisconnectTimeoutInSeconds
   */
  readonly disconnectTimeoutInSeconds?: number;

  /**
   * @schema AppStreamFleet#State
   */
  readonly state: string;

  /**
   * @schema AppStreamFleet#VpcConfig
   */
  readonly vpcConfig?: AppStreamVpcConfig;

  /**
   * @schema AppStreamFleet#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema AppStreamFleet#FleetErrors
   */
  readonly fleetErrors?: AppStreamFleetError[];

  /**
   * @schema AppStreamFleet#EnableDefaultInternetAccess
   */
  readonly enableDefaultInternetAccess?: boolean;

  /**
   * @schema AppStreamFleet#DomainJoinInfo
   */
  readonly domainJoinInfo?: AppStreamDomainJoinInfo;

  /**
   * @schema AppStreamFleet#IdleDisconnectTimeoutInSeconds
   */
  readonly idleDisconnectTimeoutInSeconds?: number;

  /**
   * @schema AppStreamFleet#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema AppStreamFleet#StreamView
   */
  readonly streamView?: string;

}

/**
 * @schema AppStreamAccessEndpoint
 */
export interface AppStreamAccessEndpoint {
  /**
   * @schema AppStreamAccessEndpoint#EndpointType
   */
  readonly endpointType: string;

  /**
   * @schema AppStreamAccessEndpoint#VpceId
   */
  readonly vpceId?: string;

}

/**
 * @schema AppStreamImageBuilder
 */
export interface AppStreamImageBuilder {
  /**
   * @schema AppStreamImageBuilder#Name
   */
  readonly name: string;

  /**
   * @schema AppStreamImageBuilder#Arn
   */
  readonly arn?: string;

  /**
   * @schema AppStreamImageBuilder#ImageArn
   */
  readonly imageArn?: string;

  /**
   * @schema AppStreamImageBuilder#Description
   */
  readonly description?: string;

  /**
   * @schema AppStreamImageBuilder#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AppStreamImageBuilder#VpcConfig
   */
  readonly vpcConfig?: AppStreamVpcConfig;

  /**
   * @schema AppStreamImageBuilder#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema AppStreamImageBuilder#Platform
   */
  readonly platform?: string;

  /**
   * @schema AppStreamImageBuilder#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema AppStreamImageBuilder#State
   */
  readonly state?: string;

  /**
   * @schema AppStreamImageBuilder#StateChangeReason
   */
  readonly stateChangeReason?: AppStreamImageBuilderStateChangeReason;

  /**
   * @schema AppStreamImageBuilder#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema AppStreamImageBuilder#EnableDefaultInternetAccess
   */
  readonly enableDefaultInternetAccess?: boolean;

  /**
   * @schema AppStreamImageBuilder#DomainJoinInfo
   */
  readonly domainJoinInfo?: AppStreamDomainJoinInfo;

  /**
   * @schema AppStreamImageBuilder#NetworkAccessConfiguration
   */
  readonly networkAccessConfiguration?: AppStreamNetworkAccessConfiguration;

  /**
   * @schema AppStreamImageBuilder#ImageBuilderErrors
   */
  readonly imageBuilderErrors?: AppStreamResourceError[];

  /**
   * @schema AppStreamImageBuilder#AppstreamAgentVersion
   */
  readonly appstreamAgentVersion?: string;

  /**
   * @schema AppStreamImageBuilder#AccessEndpoints
   */
  readonly accessEndpoints?: AppStreamAccessEndpoint[];

}

/**
 * @schema AppStreamStorageConnector
 */
export interface AppStreamStorageConnector {
  /**
   * @schema AppStreamStorageConnector#ConnectorType
   */
  readonly connectorType: string;

  /**
   * @schema AppStreamStorageConnector#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema AppStreamStorageConnector#Domains
   */
  readonly domains?: string[];

}

/**
 * @schema AppStreamUserSetting
 */
export interface AppStreamUserSetting {
  /**
   * @schema AppStreamUserSetting#Action
   */
  readonly action: string;

  /**
   * @schema AppStreamUserSetting#Permission
   */
  readonly permission: string;

}

/**
 * @schema AppStreamApplicationSettings
 */
export interface AppStreamApplicationSettings {
  /**
   * @schema AppStreamApplicationSettings#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema AppStreamApplicationSettings#SettingsGroup
   */
  readonly settingsGroup?: string;

}

/**
 * @schema AppStreamStack
 */
export interface AppStreamStack {
  /**
   * @schema AppStreamStack#Arn
   */
  readonly arn?: string;

  /**
   * @schema AppStreamStack#Name
   */
  readonly name: string;

  /**
   * @schema AppStreamStack#Description
   */
  readonly description?: string;

  /**
   * @schema AppStreamStack#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AppStreamStack#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema AppStreamStack#StorageConnectors
   */
  readonly storageConnectors?: AppStreamStorageConnector[];

  /**
   * @schema AppStreamStack#RedirectURL
   */
  readonly redirectUrl?: string;

  /**
   * @schema AppStreamStack#FeedbackURL
   */
  readonly feedbackUrl?: string;

  /**
   * @schema AppStreamStack#StackErrors
   */
  readonly stackErrors?: AppStreamStackError[];

  /**
   * @schema AppStreamStack#UserSettings
   */
  readonly userSettings?: AppStreamUserSetting[];

  /**
   * @schema AppStreamStack#ApplicationSettings
   */
  readonly applicationSettings?: AppStreamApplicationSettingsResponse;

  /**
   * @schema AppStreamStack#AccessEndpoints
   */
  readonly accessEndpoints?: AppStreamAccessEndpoint[];

  /**
   * @schema AppStreamStack#EmbedHostDomains
   */
  readonly embedHostDomains?: string[];

}

/**
 * @schema AppStreamImage
 */
export interface AppStreamImage {
  /**
   * @schema AppStreamImage#Name
   */
  readonly name: string;

  /**
   * @schema AppStreamImage#Arn
   */
  readonly arn?: string;

  /**
   * @schema AppStreamImage#BaseImageArn
   */
  readonly baseImageArn?: string;

  /**
   * @schema AppStreamImage#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AppStreamImage#State
   */
  readonly state?: string;

  /**
   * @schema AppStreamImage#Visibility
   */
  readonly visibility?: string;

  /**
   * @schema AppStreamImage#ImageBuilderSupported
   */
  readonly imageBuilderSupported?: boolean;

  /**
   * @schema AppStreamImage#ImageBuilderName
   */
  readonly imageBuilderName?: string;

  /**
   * @schema AppStreamImage#Platform
   */
  readonly platform?: string;

  /**
   * @schema AppStreamImage#Description
   */
  readonly description?: string;

  /**
   * @schema AppStreamImage#StateChangeReason
   */
  readonly stateChangeReason?: AppStreamImageStateChangeReason;

  /**
   * @schema AppStreamImage#Applications
   */
  readonly applications?: AppStreamApplication[];

  /**
   * @schema AppStreamImage#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema AppStreamImage#PublicBaseImageReleasedDate
   */
  readonly publicBaseImageReleasedDate?: string;

  /**
   * @schema AppStreamImage#AppstreamAgentVersion
   */
  readonly appstreamAgentVersion?: string;

  /**
   * @schema AppStreamImage#ImagePermissions
   */
  readonly imagePermissions?: AppStreamImagePermissions;

}

/**
 * @schema AppStreamSharedImagePermissions
 */
export interface AppStreamSharedImagePermissions {
  /**
   * @schema AppStreamSharedImagePermissions#sharedAccountId
   */
  readonly sharedAccountId: string;

  /**
   * @schema AppStreamSharedImagePermissions#imagePermissions
   */
  readonly imagePermissions: AppStreamImagePermissions;

}

/**
 * @schema AppStreamSession
 */
export interface AppStreamSession {
  /**
   * @schema AppStreamSession#Id
   */
  readonly id: string;

  /**
   * @schema AppStreamSession#UserId
   */
  readonly userId: string;

  /**
   * @schema AppStreamSession#StackName
   */
  readonly stackName: string;

  /**
   * @schema AppStreamSession#FleetName
   */
  readonly fleetName: string;

  /**
   * @schema AppStreamSession#State
   */
  readonly state: string;

  /**
   * @schema AppStreamSession#ConnectionState
   */
  readonly connectionState?: string;

  /**
   * @schema AppStreamSession#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema AppStreamSession#MaxExpirationTime
   */
  readonly maxExpirationTime?: string;

  /**
   * @schema AppStreamSession#AuthenticationType
   */
  readonly authenticationType?: string;

  /**
   * @schema AppStreamSession#NetworkAccessConfiguration
   */
  readonly networkAccessConfiguration?: AppStreamNetworkAccessConfiguration;

}

/**
 * @schema AppStreamUsageReportSubscription
 */
export interface AppStreamUsageReportSubscription {
  /**
   * @schema AppStreamUsageReportSubscription#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema AppStreamUsageReportSubscription#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema AppStreamUsageReportSubscription#LastGeneratedReportDate
   */
  readonly lastGeneratedReportDate?: string;

  /**
   * @schema AppStreamUsageReportSubscription#SubscriptionErrors
   */
  readonly subscriptionErrors?: AppStreamLastReportGenerationExecutionError[];

}

/**
 * @schema AppStreamUser
 */
export interface AppStreamUser {
  /**
   * @schema AppStreamUser#Arn
   */
  readonly arn?: string;

  /**
   * @schema AppStreamUser#UserName
   */
  readonly userName?: string;

  /**
   * @schema AppStreamUser#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema AppStreamUser#Status
   */
  readonly status?: string;

  /**
   * @schema AppStreamUser#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema AppStreamUser#LastName
   */
  readonly lastName?: string;

  /**
   * @schema AppStreamUser#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema AppStreamUser#AuthenticationType
   */
  readonly authenticationType: string;

}

/**
 * @schema AppStreamImagePermissions
 */
export interface AppStreamImagePermissions {
  /**
   * @schema AppStreamImagePermissions#allowFleet
   */
  readonly allowFleet?: boolean;

  /**
   * @schema AppStreamImagePermissions#allowImageBuilder
   */
  readonly allowImageBuilder?: boolean;

}

/**
 * @schema AppStreamComputeCapacityStatus
 */
export interface AppStreamComputeCapacityStatus {
  /**
   * @schema AppStreamComputeCapacityStatus#Desired
   */
  readonly desired: number;

  /**
   * @schema AppStreamComputeCapacityStatus#Running
   */
  readonly running?: number;

  /**
   * @schema AppStreamComputeCapacityStatus#InUse
   */
  readonly inUse?: number;

  /**
   * @schema AppStreamComputeCapacityStatus#Available
   */
  readonly available?: number;

}

/**
 * @schema AppStreamFleetError
 */
export interface AppStreamFleetError {
  /**
   * @schema AppStreamFleetError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema AppStreamFleetError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema AppStreamImageBuilderStateChangeReason
 */
export interface AppStreamImageBuilderStateChangeReason {
  /**
   * @schema AppStreamImageBuilderStateChangeReason#Code
   */
  readonly code?: string;

  /**
   * @schema AppStreamImageBuilderStateChangeReason#Message
   */
  readonly message?: string;

}

/**
 * @schema AppStreamNetworkAccessConfiguration
 */
export interface AppStreamNetworkAccessConfiguration {
  /**
   * @schema AppStreamNetworkAccessConfiguration#EniPrivateIpAddress
   */
  readonly eniPrivateIpAddress?: string;

  /**
   * @schema AppStreamNetworkAccessConfiguration#EniId
   */
  readonly eniId?: string;

}

/**
 * @schema AppStreamResourceError
 */
export interface AppStreamResourceError {
  /**
   * @schema AppStreamResourceError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema AppStreamResourceError#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema AppStreamResourceError#ErrorTimestamp
   */
  readonly errorTimestamp?: string;

}

/**
 * @schema AppStreamStackError
 */
export interface AppStreamStackError {
  /**
   * @schema AppStreamStackError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema AppStreamStackError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema AppStreamApplicationSettingsResponse
 */
export interface AppStreamApplicationSettingsResponse {
  /**
   * @schema AppStreamApplicationSettingsResponse#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema AppStreamApplicationSettingsResponse#SettingsGroup
   */
  readonly settingsGroup?: string;

  /**
   * @schema AppStreamApplicationSettingsResponse#S3BucketName
   */
  readonly s3BucketName?: string;

}

/**
 * @schema AppStreamImageStateChangeReason
 */
export interface AppStreamImageStateChangeReason {
  /**
   * @schema AppStreamImageStateChangeReason#Code
   */
  readonly code?: string;

  /**
   * @schema AppStreamImageStateChangeReason#Message
   */
  readonly message?: string;

}

/**
 * @schema AppStreamApplication
 */
export interface AppStreamApplication {
  /**
   * @schema AppStreamApplication#Name
   */
  readonly name?: string;

  /**
   * @schema AppStreamApplication#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AppStreamApplication#IconURL
   */
  readonly iconUrl?: string;

  /**
   * @schema AppStreamApplication#LaunchPath
   */
  readonly launchPath?: string;

  /**
   * @schema AppStreamApplication#LaunchParameters
   */
  readonly launchParameters?: string;

  /**
   * @schema AppStreamApplication#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema AppStreamApplication#Metadata
   */
  readonly metadata?: { [key: string]: string };

}

/**
 * @schema AppStreamLastReportGenerationExecutionError
 */
export interface AppStreamLastReportGenerationExecutionError {
  /**
   * @schema AppStreamLastReportGenerationExecutionError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema AppStreamLastReportGenerationExecutionError#ErrorMessage
   */
  readonly errorMessage?: string;

}
