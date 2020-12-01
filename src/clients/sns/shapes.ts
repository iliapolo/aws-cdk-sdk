/**
 * @schema AddPermissionInput
 */
export interface AddPermissionInput {
  /**
   * @schema AddPermissionInput#TopicArn
   */
  readonly topicArn: string;

  /**
   * @schema AddPermissionInput#Label
   */
  readonly label: string;

  /**
   * @schema AddPermissionInput#AWSAccountId
   */
  readonly awsAccountId: string[];

  /**
   * @schema AddPermissionInput#ActionName
   */
  readonly actionName: string[];

}

/**
 * @schema CheckIfPhoneNumberIsOptedOutInput
 */
export interface CheckIfPhoneNumberIsOptedOutInput {
  /**
   * @schema CheckIfPhoneNumberIsOptedOutInput#phoneNumber
   */
  readonly phoneNumber: string;

}

/**
 * @schema CheckIfPhoneNumberIsOptedOutResponse
 */
export interface CheckIfPhoneNumberIsOptedOutResponse {
  /**
   * @schema CheckIfPhoneNumberIsOptedOutResponse#isOptedOut
   */
  readonly isOptedOut?: boolean;

}

/**
 * @schema ConfirmSubscriptionInput
 */
export interface ConfirmSubscriptionInput {
  /**
   * @schema ConfirmSubscriptionInput#TopicArn
   */
  readonly topicArn: string;

  /**
   * @schema ConfirmSubscriptionInput#Token
   */
  readonly token: string;

  /**
   * @schema ConfirmSubscriptionInput#AuthenticateOnUnsubscribe
   */
  readonly authenticateOnUnsubscribe?: string;

}

/**
 * @schema ConfirmSubscriptionResponse
 */
export interface ConfirmSubscriptionResponse {
  /**
   * @schema ConfirmSubscriptionResponse#SubscriptionArn
   */
  readonly subscriptionArn?: string;

}

/**
 * @schema CreatePlatformApplicationInput
 */
export interface CreatePlatformApplicationInput {
  /**
   * @schema CreatePlatformApplicationInput#Name
   */
  readonly name: string;

  /**
   * @schema CreatePlatformApplicationInput#Platform
   */
  readonly platform: string;

  /**
   * @schema CreatePlatformApplicationInput#Attributes
   */
  readonly attributes: { [key: string]: string };

}

/**
 * @schema CreatePlatformApplicationResponse
 */
export interface CreatePlatformApplicationResponse {
  /**
   * @schema CreatePlatformApplicationResponse#PlatformApplicationArn
   */
  readonly platformApplicationArn?: string;

}

/**
 * @schema CreatePlatformEndpointInput
 */
export interface CreatePlatformEndpointInput {
  /**
   * @schema CreatePlatformEndpointInput#PlatformApplicationArn
   */
  readonly platformApplicationArn: string;

  /**
   * @schema CreatePlatformEndpointInput#Token
   */
  readonly token: string;

  /**
   * @schema CreatePlatformEndpointInput#CustomUserData
   */
  readonly customUserData?: string;

  /**
   * @schema CreatePlatformEndpointInput#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema CreateEndpointResponse
 */
export interface CreateEndpointResponse {
  /**
   * @schema CreateEndpointResponse#EndpointArn
   */
  readonly endpointArn?: string;

}

/**
 * @schema CreateTopicInput
 */
export interface CreateTopicInput {
  /**
   * @schema CreateTopicInput#Name
   */
  readonly name: string;

  /**
   * @schema CreateTopicInput#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema CreateTopicInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateTopicResponse
 */
export interface CreateTopicResponse {
  /**
   * @schema CreateTopicResponse#TopicArn
   */
  readonly topicArn?: string;

}

/**
 * @schema DeleteEndpointInput
 */
export interface DeleteEndpointInput {
  /**
   * @schema DeleteEndpointInput#EndpointArn
   */
  readonly endpointArn: string;

}

/**
 * @schema DeletePlatformApplicationInput
 */
export interface DeletePlatformApplicationInput {
  /**
   * @schema DeletePlatformApplicationInput#PlatformApplicationArn
   */
  readonly platformApplicationArn: string;

}

/**
 * @schema DeleteTopicInput
 */
export interface DeleteTopicInput {
  /**
   * @schema DeleteTopicInput#TopicArn
   */
  readonly topicArn: string;

}

/**
 * @schema GetEndpointAttributesInput
 */
export interface GetEndpointAttributesInput {
  /**
   * @schema GetEndpointAttributesInput#EndpointArn
   */
  readonly endpointArn: string;

}

/**
 * @schema GetEndpointAttributesResponse
 */
export interface GetEndpointAttributesResponse {
  /**
   * @schema GetEndpointAttributesResponse#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema GetPlatformApplicationAttributesInput
 */
export interface GetPlatformApplicationAttributesInput {
  /**
   * @schema GetPlatformApplicationAttributesInput#PlatformApplicationArn
   */
  readonly platformApplicationArn: string;

}

/**
 * @schema GetPlatformApplicationAttributesResponse
 */
export interface GetPlatformApplicationAttributesResponse {
  /**
   * @schema GetPlatformApplicationAttributesResponse#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema GetSmsAttributesInput
 */
export interface GetSmsAttributesInput {
  /**
   * @schema GetSmsAttributesInput#attributes
   */
  readonly attributes?: string[];

}

/**
 * @schema GetSmsAttributesResponse
 */
export interface GetSmsAttributesResponse {
  /**
   * @schema GetSmsAttributesResponse#attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema GetSubscriptionAttributesInput
 */
export interface GetSubscriptionAttributesInput {
  /**
   * @schema GetSubscriptionAttributesInput#SubscriptionArn
   */
  readonly subscriptionArn: string;

}

/**
 * @schema GetSubscriptionAttributesResponse
 */
export interface GetSubscriptionAttributesResponse {
  /**
   * @schema GetSubscriptionAttributesResponse#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema GetTopicAttributesInput
 */
export interface GetTopicAttributesInput {
  /**
   * @schema GetTopicAttributesInput#TopicArn
   */
  readonly topicArn: string;

}

/**
 * @schema GetTopicAttributesResponse
 */
export interface GetTopicAttributesResponse {
  /**
   * @schema GetTopicAttributesResponse#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema ListEndpointsByPlatformApplicationInput
 */
export interface ListEndpointsByPlatformApplicationInput {
  /**
   * @schema ListEndpointsByPlatformApplicationInput#PlatformApplicationArn
   */
  readonly platformApplicationArn: string;

  /**
   * @schema ListEndpointsByPlatformApplicationInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListEndpointsByPlatformApplicationResponse
 */
export interface ListEndpointsByPlatformApplicationResponse {
  /**
   * @schema ListEndpointsByPlatformApplicationResponse#Endpoints
   */
  readonly endpoints?: string[];

  /**
   * @schema ListEndpointsByPlatformApplicationResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPhoneNumbersOptedOutInput
 */
export interface ListPhoneNumbersOptedOutInput {
  /**
   * @schema ListPhoneNumbersOptedOutInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPhoneNumbersOptedOutResponse
 */
export interface ListPhoneNumbersOptedOutResponse {
  /**
   * @schema ListPhoneNumbersOptedOutResponse#phoneNumbers
   */
  readonly phoneNumbers?: string[];

  /**
   * @schema ListPhoneNumbersOptedOutResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPlatformApplicationsInput
 */
export interface ListPlatformApplicationsInput {
  /**
   * @schema ListPlatformApplicationsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPlatformApplicationsResponse
 */
export interface ListPlatformApplicationsResponse {
  /**
   * @schema ListPlatformApplicationsResponse#PlatformApplications
   */
  readonly platformApplications?: PlatformApplication[];

  /**
   * @schema ListPlatformApplicationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSubscriptionsInput
 */
export interface ListSubscriptionsInput {
  /**
   * @schema ListSubscriptionsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSubscriptionsResponse
 */
export interface ListSubscriptionsResponse {
  /**
   * @schema ListSubscriptionsResponse#Subscriptions
   */
  readonly subscriptions?: Subscription[];

  /**
   * @schema ListSubscriptionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSubscriptionsByTopicInput
 */
export interface ListSubscriptionsByTopicInput {
  /**
   * @schema ListSubscriptionsByTopicInput#TopicArn
   */
  readonly topicArn: string;

  /**
   * @schema ListSubscriptionsByTopicInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSubscriptionsByTopicResponse
 */
export interface ListSubscriptionsByTopicResponse {
  /**
   * @schema ListSubscriptionsByTopicResponse#Subscriptions
   */
  readonly subscriptions?: Subscription[];

  /**
   * @schema ListSubscriptionsByTopicResponse#NextToken
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
  readonly tags?: Tag[];

}

/**
 * @schema ListTopicsInput
 */
export interface ListTopicsInput {
  /**
   * @schema ListTopicsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTopicsResponse
 */
export interface ListTopicsResponse {
  /**
   * @schema ListTopicsResponse#Topics
   */
  readonly topics?: Topic[];

  /**
   * @schema ListTopicsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema OptInPhoneNumberInput
 */
export interface OptInPhoneNumberInput {
  /**
   * @schema OptInPhoneNumberInput#phoneNumber
   */
  readonly phoneNumber: string;

}

/**
 * @schema OptInPhoneNumberResponse
 */
export interface OptInPhoneNumberResponse {
}

/**
 * @schema PublishInput
 */
export interface PublishInput {
  /**
   * @schema PublishInput#TopicArn
   */
  readonly topicArn?: string;

  /**
   * @schema PublishInput#TargetArn
   */
  readonly targetArn?: string;

  /**
   * @schema PublishInput#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema PublishInput#Message
   */
  readonly message: string;

  /**
   * @schema PublishInput#Subject
   */
  readonly subject?: string;

  /**
   * @schema PublishInput#MessageStructure
   */
  readonly messageStructure?: string;

  /**
   * @schema PublishInput#MessageAttributes
   */
  readonly messageAttributes?: { [key: string]: MessageAttributeValue };

  /**
   * @schema PublishInput#MessageDeduplicationId
   */
  readonly messageDeduplicationId?: string;

  /**
   * @schema PublishInput#MessageGroupId
   */
  readonly messageGroupId?: string;

}

/**
 * @schema PublishResponse
 */
export interface PublishResponse {
  /**
   * @schema PublishResponse#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema PublishResponse#SequenceNumber
   */
  readonly sequenceNumber?: string;

}

/**
 * @schema RemovePermissionInput
 */
export interface RemovePermissionInput {
  /**
   * @schema RemovePermissionInput#TopicArn
   */
  readonly topicArn: string;

  /**
   * @schema RemovePermissionInput#Label
   */
  readonly label: string;

}

/**
 * @schema SetEndpointAttributesInput
 */
export interface SetEndpointAttributesInput {
  /**
   * @schema SetEndpointAttributesInput#EndpointArn
   */
  readonly endpointArn: string;

  /**
   * @schema SetEndpointAttributesInput#Attributes
   */
  readonly attributes: { [key: string]: string };

}

/**
 * @schema SetPlatformApplicationAttributesInput
 */
export interface SetPlatformApplicationAttributesInput {
  /**
   * @schema SetPlatformApplicationAttributesInput#PlatformApplicationArn
   */
  readonly platformApplicationArn: string;

  /**
   * @schema SetPlatformApplicationAttributesInput#Attributes
   */
  readonly attributes: { [key: string]: string };

}

/**
 * @schema SetSmsAttributesInput
 */
export interface SetSmsAttributesInput {
  /**
   * @schema SetSmsAttributesInput#attributes
   */
  readonly attributes: { [key: string]: string };

}

/**
 * @schema SetSmsAttributesResponse
 */
export interface SetSmsAttributesResponse {
}

/**
 * @schema SetSubscriptionAttributesInput
 */
export interface SetSubscriptionAttributesInput {
  /**
   * @schema SetSubscriptionAttributesInput#SubscriptionArn
   */
  readonly subscriptionArn: string;

  /**
   * @schema SetSubscriptionAttributesInput#AttributeName
   */
  readonly attributeName: string;

  /**
   * @schema SetSubscriptionAttributesInput#AttributeValue
   */
  readonly attributeValue?: string;

}

/**
 * @schema SetTopicAttributesInput
 */
export interface SetTopicAttributesInput {
  /**
   * @schema SetTopicAttributesInput#TopicArn
   */
  readonly topicArn: string;

  /**
   * @schema SetTopicAttributesInput#AttributeName
   */
  readonly attributeName: string;

  /**
   * @schema SetTopicAttributesInput#AttributeValue
   */
  readonly attributeValue?: string;

}

/**
 * @schema SubscribeInput
 */
export interface SubscribeInput {
  /**
   * @schema SubscribeInput#TopicArn
   */
  readonly topicArn: string;

  /**
   * @schema SubscribeInput#Protocol
   */
  readonly protocol: string;

  /**
   * @schema SubscribeInput#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema SubscribeInput#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema SubscribeInput#ReturnSubscriptionArn
   */
  readonly returnSubscriptionArn?: boolean;

}

/**
 * @schema SubscribeResponse
 */
export interface SubscribeResponse {
  /**
   * @schema SubscribeResponse#SubscriptionArn
   */
  readonly subscriptionArn?: string;

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
  readonly tags: Tag[];

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UnsubscribeInput
 */
export interface UnsubscribeInput {
  /**
   * @schema UnsubscribeInput#SubscriptionArn
   */
  readonly subscriptionArn: string;

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
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value: string;

}

/**
 * @schema PlatformApplication
 */
export interface PlatformApplication {
  /**
   * @schema PlatformApplication#PlatformApplicationArn
   */
  readonly platformApplicationArn?: string;

  /**
   * @schema PlatformApplication#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema Subscription
 */
export interface Subscription {
  /**
   * @schema Subscription#SubscriptionArn
   */
  readonly subscriptionArn?: string;

  /**
   * @schema Subscription#Owner
   */
  readonly owner?: string;

  /**
   * @schema Subscription#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema Subscription#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema Subscription#TopicArn
   */
  readonly topicArn?: string;

}

/**
 * @schema Topic
 */
export interface Topic {
  /**
   * @schema Topic#TopicArn
   */
  readonly topicArn?: string;

}

/**
 * @schema MessageAttributeValue
 */
export interface MessageAttributeValue {
  /**
   * @schema MessageAttributeValue#DataType
   */
  readonly dataType: string;

  /**
   * @schema MessageAttributeValue#StringValue
   */
  readonly stringValue?: string;

  /**
   * @schema MessageAttributeValue#BinaryValue
   */
  readonly binaryValue?: any;

}
