/**
 * @schema SnsAddPermissionInput
 */
export interface SnsAddPermissionInput {
  /**
   * @schema SnsAddPermissionInput#TopicArn
   */
  readonly topicArn: string;

  /**
   * @schema SnsAddPermissionInput#Label
   */
  readonly label: string;

  /**
   * @schema SnsAddPermissionInput#AWSAccountId
   */
  readonly awsAccountId: string[];

  /**
   * @schema SnsAddPermissionInput#ActionName
   */
  readonly actionName: string[];

}

/**
 * @schema SnsCheckIfPhoneNumberIsOptedOutInput
 */
export interface SnsCheckIfPhoneNumberIsOptedOutInput {
  /**
   * @schema SnsCheckIfPhoneNumberIsOptedOutInput#phoneNumber
   */
  readonly phoneNumber: string;

}

/**
 * @schema SnsCheckIfPhoneNumberIsOptedOutResponse
 */
export interface SnsCheckIfPhoneNumberIsOptedOutResponse {
  /**
   * @schema SnsCheckIfPhoneNumberIsOptedOutResponse#isOptedOut
   */
  readonly isOptedOut?: boolean;

}

/**
 * @schema SnsConfirmSubscriptionInput
 */
export interface SnsConfirmSubscriptionInput {
  /**
   * @schema SnsConfirmSubscriptionInput#TopicArn
   */
  readonly topicArn: string;

  /**
   * @schema SnsConfirmSubscriptionInput#Token
   */
  readonly token: string;

  /**
   * @schema SnsConfirmSubscriptionInput#AuthenticateOnUnsubscribe
   */
  readonly authenticateOnUnsubscribe?: string;

}

/**
 * @schema SnsConfirmSubscriptionResponse
 */
export interface SnsConfirmSubscriptionResponse {
  /**
   * @schema SnsConfirmSubscriptionResponse#SubscriptionArn
   */
  readonly subscriptionArn?: string;

}

/**
 * @schema SnsCreatePlatformApplicationInput
 */
export interface SnsCreatePlatformApplicationInput {
  /**
   * @schema SnsCreatePlatformApplicationInput#Name
   */
  readonly name: string;

  /**
   * @schema SnsCreatePlatformApplicationInput#Platform
   */
  readonly platform: string;

  /**
   * @schema SnsCreatePlatformApplicationInput#Attributes
   */
  readonly attributes: { [key: string]: string };

}

/**
 * @schema SnsCreatePlatformApplicationResponse
 */
export interface SnsCreatePlatformApplicationResponse {
  /**
   * @schema SnsCreatePlatformApplicationResponse#PlatformApplicationArn
   */
  readonly platformApplicationArn?: string;

}

/**
 * @schema SnsCreatePlatformEndpointInput
 */
export interface SnsCreatePlatformEndpointInput {
  /**
   * @schema SnsCreatePlatformEndpointInput#PlatformApplicationArn
   */
  readonly platformApplicationArn: string;

  /**
   * @schema SnsCreatePlatformEndpointInput#Token
   */
  readonly token: string;

  /**
   * @schema SnsCreatePlatformEndpointInput#CustomUserData
   */
  readonly customUserData?: string;

  /**
   * @schema SnsCreatePlatformEndpointInput#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema SnsCreateEndpointResponse
 */
export interface SnsCreateEndpointResponse {
  /**
   * @schema SnsCreateEndpointResponse#EndpointArn
   */
  readonly endpointArn?: string;

}

/**
 * @schema SnsCreateTopicInput
 */
export interface SnsCreateTopicInput {
  /**
   * @schema SnsCreateTopicInput#Name
   */
  readonly name: string;

  /**
   * @schema SnsCreateTopicInput#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema SnsCreateTopicInput#Tags
   */
  readonly tags?: SnsTag[];

}

/**
 * @schema SnsCreateTopicResponse
 */
export interface SnsCreateTopicResponse {
  /**
   * @schema SnsCreateTopicResponse#TopicArn
   */
  readonly topicArn?: string;

}

/**
 * @schema SnsDeleteEndpointInput
 */
export interface SnsDeleteEndpointInput {
  /**
   * @schema SnsDeleteEndpointInput#EndpointArn
   */
  readonly endpointArn: string;

}

/**
 * @schema SnsDeletePlatformApplicationInput
 */
export interface SnsDeletePlatformApplicationInput {
  /**
   * @schema SnsDeletePlatformApplicationInput#PlatformApplicationArn
   */
  readonly platformApplicationArn: string;

}

/**
 * @schema SnsDeleteTopicInput
 */
export interface SnsDeleteTopicInput {
  /**
   * @schema SnsDeleteTopicInput#TopicArn
   */
  readonly topicArn: string;

}

/**
 * @schema SnsGetEndpointAttributesInput
 */
export interface SnsGetEndpointAttributesInput {
  /**
   * @schema SnsGetEndpointAttributesInput#EndpointArn
   */
  readonly endpointArn: string;

}

/**
 * @schema SnsGetEndpointAttributesResponse
 */
export interface SnsGetEndpointAttributesResponse {
  /**
   * @schema SnsGetEndpointAttributesResponse#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema SnsGetPlatformApplicationAttributesInput
 */
export interface SnsGetPlatformApplicationAttributesInput {
  /**
   * @schema SnsGetPlatformApplicationAttributesInput#PlatformApplicationArn
   */
  readonly platformApplicationArn: string;

}

/**
 * @schema SnsGetPlatformApplicationAttributesResponse
 */
export interface SnsGetPlatformApplicationAttributesResponse {
  /**
   * @schema SnsGetPlatformApplicationAttributesResponse#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema SnsGetSmsAttributesInput
 */
export interface SnsGetSmsAttributesInput {
  /**
   * @schema SnsGetSmsAttributesInput#attributes
   */
  readonly attributes?: string[];

}

/**
 * @schema SnsGetSmsAttributesResponse
 */
export interface SnsGetSmsAttributesResponse {
  /**
   * @schema SnsGetSmsAttributesResponse#attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema SnsGetSubscriptionAttributesInput
 */
export interface SnsGetSubscriptionAttributesInput {
  /**
   * @schema SnsGetSubscriptionAttributesInput#SubscriptionArn
   */
  readonly subscriptionArn: string;

}

/**
 * @schema SnsGetSubscriptionAttributesResponse
 */
export interface SnsGetSubscriptionAttributesResponse {
  /**
   * @schema SnsGetSubscriptionAttributesResponse#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema SnsGetTopicAttributesInput
 */
export interface SnsGetTopicAttributesInput {
  /**
   * @schema SnsGetTopicAttributesInput#TopicArn
   */
  readonly topicArn: string;

}

/**
 * @schema SnsGetTopicAttributesResponse
 */
export interface SnsGetTopicAttributesResponse {
  /**
   * @schema SnsGetTopicAttributesResponse#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema SnsListEndpointsByPlatformApplicationInput
 */
export interface SnsListEndpointsByPlatformApplicationInput {
  /**
   * @schema SnsListEndpointsByPlatformApplicationInput#PlatformApplicationArn
   */
  readonly platformApplicationArn: string;

  /**
   * @schema SnsListEndpointsByPlatformApplicationInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SnsListEndpointsByPlatformApplicationResponse
 */
export interface SnsListEndpointsByPlatformApplicationResponse {
  /**
   * @schema SnsListEndpointsByPlatformApplicationResponse#Endpoints
   */
  readonly endpoints?: SnsEndpoint[];

  /**
   * @schema SnsListEndpointsByPlatformApplicationResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SnsListPhoneNumbersOptedOutInput
 */
export interface SnsListPhoneNumbersOptedOutInput {
  /**
   * @schema SnsListPhoneNumbersOptedOutInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SnsListPhoneNumbersOptedOutResponse
 */
export interface SnsListPhoneNumbersOptedOutResponse {
  /**
   * @schema SnsListPhoneNumbersOptedOutResponse#phoneNumbers
   */
  readonly phoneNumbers?: string[];

  /**
   * @schema SnsListPhoneNumbersOptedOutResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SnsListPlatformApplicationsInput
 */
export interface SnsListPlatformApplicationsInput {
  /**
   * @schema SnsListPlatformApplicationsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SnsListPlatformApplicationsResponse
 */
export interface SnsListPlatformApplicationsResponse {
  /**
   * @schema SnsListPlatformApplicationsResponse#PlatformApplications
   */
  readonly platformApplications?: SnsPlatformApplication[];

  /**
   * @schema SnsListPlatformApplicationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SnsListSubscriptionsInput
 */
export interface SnsListSubscriptionsInput {
  /**
   * @schema SnsListSubscriptionsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SnsListSubscriptionsResponse
 */
export interface SnsListSubscriptionsResponse {
  /**
   * @schema SnsListSubscriptionsResponse#Subscriptions
   */
  readonly subscriptions?: SnsSubscription[];

  /**
   * @schema SnsListSubscriptionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SnsListSubscriptionsByTopicInput
 */
export interface SnsListSubscriptionsByTopicInput {
  /**
   * @schema SnsListSubscriptionsByTopicInput#TopicArn
   */
  readonly topicArn: string;

  /**
   * @schema SnsListSubscriptionsByTopicInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SnsListSubscriptionsByTopicResponse
 */
export interface SnsListSubscriptionsByTopicResponse {
  /**
   * @schema SnsListSubscriptionsByTopicResponse#Subscriptions
   */
  readonly subscriptions?: SnsSubscription[];

  /**
   * @schema SnsListSubscriptionsByTopicResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SnsListTagsForResourceRequest
 */
export interface SnsListTagsForResourceRequest {
  /**
   * @schema SnsListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema SnsListTagsForResourceResponse
 */
export interface SnsListTagsForResourceResponse {
  /**
   * @schema SnsListTagsForResourceResponse#Tags
   */
  readonly tags?: SnsTag[];

}

/**
 * @schema SnsListTopicsInput
 */
export interface SnsListTopicsInput {
  /**
   * @schema SnsListTopicsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SnsListTopicsResponse
 */
export interface SnsListTopicsResponse {
  /**
   * @schema SnsListTopicsResponse#Topics
   */
  readonly topics?: SnsTopic[];

  /**
   * @schema SnsListTopicsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SnsOptInPhoneNumberInput
 */
export interface SnsOptInPhoneNumberInput {
  /**
   * @schema SnsOptInPhoneNumberInput#phoneNumber
   */
  readonly phoneNumber: string;

}

/**
 * @schema SnsOptInPhoneNumberResponse
 */
export interface SnsOptInPhoneNumberResponse {
}

/**
 * @schema SnsPublishInput
 */
export interface SnsPublishInput {
  /**
   * @schema SnsPublishInput#TopicArn
   */
  readonly topicArn?: string;

  /**
   * @schema SnsPublishInput#TargetArn
   */
  readonly targetArn?: string;

  /**
   * @schema SnsPublishInput#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema SnsPublishInput#Message
   */
  readonly message: string;

  /**
   * @schema SnsPublishInput#Subject
   */
  readonly subject?: string;

  /**
   * @schema SnsPublishInput#MessageStructure
   */
  readonly messageStructure?: string;

  /**
   * @schema SnsPublishInput#MessageAttributes
   */
  readonly messageAttributes?: { [key: string]: SnsMessageAttributeValue };

  /**
   * @schema SnsPublishInput#MessageDeduplicationId
   */
  readonly messageDeduplicationId?: string;

  /**
   * @schema SnsPublishInput#MessageGroupId
   */
  readonly messageGroupId?: string;

}

/**
 * @schema SnsPublishResponse
 */
export interface SnsPublishResponse {
  /**
   * @schema SnsPublishResponse#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema SnsPublishResponse#SequenceNumber
   */
  readonly sequenceNumber?: string;

}

/**
 * @schema SnsRemovePermissionInput
 */
export interface SnsRemovePermissionInput {
  /**
   * @schema SnsRemovePermissionInput#TopicArn
   */
  readonly topicArn: string;

  /**
   * @schema SnsRemovePermissionInput#Label
   */
  readonly label: string;

}

/**
 * @schema SnsSetEndpointAttributesInput
 */
export interface SnsSetEndpointAttributesInput {
  /**
   * @schema SnsSetEndpointAttributesInput#EndpointArn
   */
  readonly endpointArn: string;

  /**
   * @schema SnsSetEndpointAttributesInput#Attributes
   */
  readonly attributes: { [key: string]: string };

}

/**
 * @schema SnsSetPlatformApplicationAttributesInput
 */
export interface SnsSetPlatformApplicationAttributesInput {
  /**
   * @schema SnsSetPlatformApplicationAttributesInput#PlatformApplicationArn
   */
  readonly platformApplicationArn: string;

  /**
   * @schema SnsSetPlatformApplicationAttributesInput#Attributes
   */
  readonly attributes: { [key: string]: string };

}

/**
 * @schema SnsSetSmsAttributesInput
 */
export interface SnsSetSmsAttributesInput {
  /**
   * @schema SnsSetSmsAttributesInput#attributes
   */
  readonly attributes: { [key: string]: string };

}

/**
 * @schema SnsSetSmsAttributesResponse
 */
export interface SnsSetSmsAttributesResponse {
}

/**
 * @schema SnsSetSubscriptionAttributesInput
 */
export interface SnsSetSubscriptionAttributesInput {
  /**
   * @schema SnsSetSubscriptionAttributesInput#SubscriptionArn
   */
  readonly subscriptionArn: string;

  /**
   * @schema SnsSetSubscriptionAttributesInput#AttributeName
   */
  readonly attributeName: string;

  /**
   * @schema SnsSetSubscriptionAttributesInput#AttributeValue
   */
  readonly attributeValue?: string;

}

/**
 * @schema SnsSetTopicAttributesInput
 */
export interface SnsSetTopicAttributesInput {
  /**
   * @schema SnsSetTopicAttributesInput#TopicArn
   */
  readonly topicArn: string;

  /**
   * @schema SnsSetTopicAttributesInput#AttributeName
   */
  readonly attributeName: string;

  /**
   * @schema SnsSetTopicAttributesInput#AttributeValue
   */
  readonly attributeValue?: string;

}

/**
 * @schema SnsSubscribeInput
 */
export interface SnsSubscribeInput {
  /**
   * @schema SnsSubscribeInput#TopicArn
   */
  readonly topicArn: string;

  /**
   * @schema SnsSubscribeInput#Protocol
   */
  readonly protocol: string;

  /**
   * @schema SnsSubscribeInput#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema SnsSubscribeInput#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema SnsSubscribeInput#ReturnSubscriptionArn
   */
  readonly returnSubscriptionArn?: boolean;

}

/**
 * @schema SnsSubscribeResponse
 */
export interface SnsSubscribeResponse {
  /**
   * @schema SnsSubscribeResponse#SubscriptionArn
   */
  readonly subscriptionArn?: string;

}

/**
 * @schema SnsTagResourceRequest
 */
export interface SnsTagResourceRequest {
  /**
   * @schema SnsTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SnsTagResourceRequest#Tags
   */
  readonly tags: SnsTag[];

}

/**
 * @schema SnsTagResourceResponse
 */
export interface SnsTagResourceResponse {
}

/**
 * @schema SnsUnsubscribeInput
 */
export interface SnsUnsubscribeInput {
  /**
   * @schema SnsUnsubscribeInput#SubscriptionArn
   */
  readonly subscriptionArn: string;

}

/**
 * @schema SnsUntagResourceRequest
 */
export interface SnsUntagResourceRequest {
  /**
   * @schema SnsUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SnsUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema SnsUntagResourceResponse
 */
export interface SnsUntagResourceResponse {
}

/**
 * @schema SnsTag
 */
export interface SnsTag {
  /**
   * @schema SnsTag#Key
   */
  readonly key: string;

  /**
   * @schema SnsTag#Value
   */
  readonly value: string;

}

/**
 * @schema SnsEndpoint
 */
export interface SnsEndpoint {
  /**
   * @schema SnsEndpoint#EndpointArn
   */
  readonly endpointArn?: string;

  /**
   * @schema SnsEndpoint#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema SnsPlatformApplication
 */
export interface SnsPlatformApplication {
  /**
   * @schema SnsPlatformApplication#PlatformApplicationArn
   */
  readonly platformApplicationArn?: string;

  /**
   * @schema SnsPlatformApplication#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema SnsSubscription
 */
export interface SnsSubscription {
  /**
   * @schema SnsSubscription#SubscriptionArn
   */
  readonly subscriptionArn?: string;

  /**
   * @schema SnsSubscription#Owner
   */
  readonly owner?: string;

  /**
   * @schema SnsSubscription#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema SnsSubscription#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema SnsSubscription#TopicArn
   */
  readonly topicArn?: string;

}

/**
 * @schema SnsTopic
 */
export interface SnsTopic {
  /**
   * @schema SnsTopic#TopicArn
   */
  readonly topicArn?: string;

}

/**
 * @schema SnsMessageAttributeValue
 */
export interface SnsMessageAttributeValue {
  /**
   * @schema SnsMessageAttributeValue#DataType
   */
  readonly dataType: string;

  /**
   * @schema SnsMessageAttributeValue#StringValue
   */
  readonly stringValue?: string;

  /**
   * @schema SnsMessageAttributeValue#BinaryValue
   */
  readonly binaryValue?: any;

}
