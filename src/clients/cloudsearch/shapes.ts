/**
 * @schema BuildSuggestersRequest
 */
export interface BuildSuggestersRequest {
  /**
   * @schema BuildSuggestersRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema BuildSuggestersResponse
 */
export interface BuildSuggestersResponse {
  /**
   * @schema BuildSuggestersResponse#FieldNames
   */
  readonly fieldNames?: string[];

}

/**
 * @schema CreateDomainRequest
 */
export interface CreateDomainRequest {
  /**
   * @schema CreateDomainRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema CreateDomainResponse
 */
export interface CreateDomainResponse {
  /**
   * @schema CreateDomainResponse#DomainStatus
   */
  readonly domainStatus?: DomainStatus;

}

/**
 * @schema DefineAnalysisSchemeRequest
 */
export interface DefineAnalysisSchemeRequest {
  /**
   * @schema DefineAnalysisSchemeRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DefineAnalysisSchemeRequest#AnalysisScheme
   */
  readonly analysisScheme: AnalysisScheme;

}

/**
 * @schema DefineAnalysisSchemeResponse
 */
export interface DefineAnalysisSchemeResponse {
  /**
   * @schema DefineAnalysisSchemeResponse#AnalysisScheme
   */
  readonly analysisScheme: AnalysisSchemeStatus;

}

/**
 * @schema DefineExpressionRequest
 */
export interface DefineExpressionRequest {
  /**
   * @schema DefineExpressionRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DefineExpressionRequest#Expression
   */
  readonly expression: Expression;

}

/**
 * @schema DefineExpressionResponse
 */
export interface DefineExpressionResponse {
  /**
   * @schema DefineExpressionResponse#Expression
   */
  readonly expression: ExpressionStatus;

}

/**
 * @schema DefineIndexFieldRequest
 */
export interface DefineIndexFieldRequest {
  /**
   * @schema DefineIndexFieldRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DefineIndexFieldRequest#IndexField
   */
  readonly indexField: IndexField;

}

/**
 * @schema DefineIndexFieldResponse
 */
export interface DefineIndexFieldResponse {
  /**
   * @schema DefineIndexFieldResponse#IndexField
   */
  readonly indexField: IndexFieldStatus;

}

/**
 * @schema DefineSuggesterRequest
 */
export interface DefineSuggesterRequest {
  /**
   * @schema DefineSuggesterRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DefineSuggesterRequest#Suggester
   */
  readonly suggester: Suggester;

}

/**
 * @schema DefineSuggesterResponse
 */
export interface DefineSuggesterResponse {
  /**
   * @schema DefineSuggesterResponse#Suggester
   */
  readonly suggester: SuggesterStatus;

}

/**
 * @schema DeleteAnalysisSchemeRequest
 */
export interface DeleteAnalysisSchemeRequest {
  /**
   * @schema DeleteAnalysisSchemeRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DeleteAnalysisSchemeRequest#AnalysisSchemeName
   */
  readonly analysisSchemeName: string;

}

/**
 * @schema DeleteAnalysisSchemeResponse
 */
export interface DeleteAnalysisSchemeResponse {
  /**
   * @schema DeleteAnalysisSchemeResponse#AnalysisScheme
   */
  readonly analysisScheme: AnalysisSchemeStatus;

}

/**
 * @schema DeleteDomainRequest
 */
export interface DeleteDomainRequest {
  /**
   * @schema DeleteDomainRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema DeleteDomainResponse
 */
export interface DeleteDomainResponse {
  /**
   * @schema DeleteDomainResponse#DomainStatus
   */
  readonly domainStatus?: DomainStatus;

}

/**
 * @schema DeleteExpressionRequest
 */
export interface DeleteExpressionRequest {
  /**
   * @schema DeleteExpressionRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DeleteExpressionRequest#ExpressionName
   */
  readonly expressionName: string;

}

/**
 * @schema DeleteExpressionResponse
 */
export interface DeleteExpressionResponse {
  /**
   * @schema DeleteExpressionResponse#Expression
   */
  readonly expression: ExpressionStatus;

}

/**
 * @schema DeleteIndexFieldRequest
 */
export interface DeleteIndexFieldRequest {
  /**
   * @schema DeleteIndexFieldRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DeleteIndexFieldRequest#IndexFieldName
   */
  readonly indexFieldName: string;

}

/**
 * @schema DeleteIndexFieldResponse
 */
export interface DeleteIndexFieldResponse {
  /**
   * @schema DeleteIndexFieldResponse#IndexField
   */
  readonly indexField: IndexFieldStatus;

}

/**
 * @schema DeleteSuggesterRequest
 */
export interface DeleteSuggesterRequest {
  /**
   * @schema DeleteSuggesterRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DeleteSuggesterRequest#SuggesterName
   */
  readonly suggesterName: string;

}

/**
 * @schema DeleteSuggesterResponse
 */
export interface DeleteSuggesterResponse {
  /**
   * @schema DeleteSuggesterResponse#Suggester
   */
  readonly suggester: SuggesterStatus;

}

/**
 * @schema DescribeAnalysisSchemesRequest
 */
export interface DescribeAnalysisSchemesRequest {
  /**
   * @schema DescribeAnalysisSchemesRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DescribeAnalysisSchemesRequest#AnalysisSchemeNames
   */
  readonly analysisSchemeNames?: string[];

  /**
   * @schema DescribeAnalysisSchemesRequest#Deployed
   */
  readonly deployed?: boolean;

}

/**
 * @schema DescribeAnalysisSchemesResponse
 */
export interface DescribeAnalysisSchemesResponse {
  /**
   * @schema DescribeAnalysisSchemesResponse#AnalysisSchemes
   */
  readonly analysisSchemes: AnalysisSchemeStatus[];

}

/**
 * @schema DescribeAvailabilityOptionsRequest
 */
export interface DescribeAvailabilityOptionsRequest {
  /**
   * @schema DescribeAvailabilityOptionsRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DescribeAvailabilityOptionsRequest#Deployed
   */
  readonly deployed?: boolean;

}

/**
 * @schema DescribeAvailabilityOptionsResponse
 */
export interface DescribeAvailabilityOptionsResponse {
  /**
   * @schema DescribeAvailabilityOptionsResponse#AvailabilityOptions
   */
  readonly availabilityOptions?: AvailabilityOptionsStatus;

}

/**
 * @schema DescribeDomainEndpointOptionsRequest
 */
export interface DescribeDomainEndpointOptionsRequest {
  /**
   * @schema DescribeDomainEndpointOptionsRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DescribeDomainEndpointOptionsRequest#Deployed
   */
  readonly deployed?: boolean;

}

/**
 * @schema DescribeDomainEndpointOptionsResponse
 */
export interface DescribeDomainEndpointOptionsResponse {
  /**
   * @schema DescribeDomainEndpointOptionsResponse#DomainEndpointOptions
   */
  readonly domainEndpointOptions?: DomainEndpointOptionsStatus;

}

/**
 * @schema DescribeDomainsRequest
 */
export interface DescribeDomainsRequest {
  /**
   * @schema DescribeDomainsRequest#DomainNames
   */
  readonly domainNames?: string[];

}

/**
 * @schema DescribeDomainsResponse
 */
export interface DescribeDomainsResponse {
  /**
   * @schema DescribeDomainsResponse#DomainStatusList
   */
  readonly domainStatusList: DomainStatus[];

}

/**
 * @schema DescribeExpressionsRequest
 */
export interface DescribeExpressionsRequest {
  /**
   * @schema DescribeExpressionsRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DescribeExpressionsRequest#ExpressionNames
   */
  readonly expressionNames?: string[];

  /**
   * @schema DescribeExpressionsRequest#Deployed
   */
  readonly deployed?: boolean;

}

/**
 * @schema DescribeExpressionsResponse
 */
export interface DescribeExpressionsResponse {
  /**
   * @schema DescribeExpressionsResponse#Expressions
   */
  readonly expressions: ExpressionStatus[];

}

/**
 * @schema DescribeIndexFieldsRequest
 */
export interface DescribeIndexFieldsRequest {
  /**
   * @schema DescribeIndexFieldsRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DescribeIndexFieldsRequest#FieldNames
   */
  readonly fieldNames?: string[];

  /**
   * @schema DescribeIndexFieldsRequest#Deployed
   */
  readonly deployed?: boolean;

}

/**
 * @schema DescribeIndexFieldsResponse
 */
export interface DescribeIndexFieldsResponse {
  /**
   * @schema DescribeIndexFieldsResponse#IndexFields
   */
  readonly indexFields: IndexFieldStatus[];

}

/**
 * @schema DescribeScalingParametersRequest
 */
export interface DescribeScalingParametersRequest {
  /**
   * @schema DescribeScalingParametersRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema DescribeScalingParametersResponse
 */
export interface DescribeScalingParametersResponse {
  /**
   * @schema DescribeScalingParametersResponse#ScalingParameters
   */
  readonly scalingParameters: ScalingParametersStatus;

}

/**
 * @schema DescribeServiceAccessPoliciesRequest
 */
export interface DescribeServiceAccessPoliciesRequest {
  /**
   * @schema DescribeServiceAccessPoliciesRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DescribeServiceAccessPoliciesRequest#Deployed
   */
  readonly deployed?: boolean;

}

/**
 * @schema DescribeServiceAccessPoliciesResponse
 */
export interface DescribeServiceAccessPoliciesResponse {
  /**
   * @schema DescribeServiceAccessPoliciesResponse#AccessPolicies
   */
  readonly accessPolicies: AccessPoliciesStatus;

}

/**
 * @schema DescribeSuggestersRequest
 */
export interface DescribeSuggestersRequest {
  /**
   * @schema DescribeSuggestersRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DescribeSuggestersRequest#SuggesterNames
   */
  readonly suggesterNames?: string[];

  /**
   * @schema DescribeSuggestersRequest#Deployed
   */
  readonly deployed?: boolean;

}

/**
 * @schema DescribeSuggestersResponse
 */
export interface DescribeSuggestersResponse {
  /**
   * @schema DescribeSuggestersResponse#Suggesters
   */
  readonly suggesters: SuggesterStatus[];

}

/**
 * @schema IndexDocumentsRequest
 */
export interface IndexDocumentsRequest {
  /**
   * @schema IndexDocumentsRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema IndexDocumentsResponse
 */
export interface IndexDocumentsResponse {
  /**
   * @schema IndexDocumentsResponse#FieldNames
   */
  readonly fieldNames?: string[];

}

/**
 * @schema ListDomainNamesResponse
 */
export interface ListDomainNamesResponse {
  /**
   * @schema ListDomainNamesResponse#DomainNames
   */
  readonly domainNames?: { [key: string]: string };

}

/**
 * @schema UpdateAvailabilityOptionsRequest
 */
export interface UpdateAvailabilityOptionsRequest {
  /**
   * @schema UpdateAvailabilityOptionsRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema UpdateAvailabilityOptionsRequest#MultiAZ
   */
  readonly multiAz: boolean;

}

/**
 * @schema UpdateAvailabilityOptionsResponse
 */
export interface UpdateAvailabilityOptionsResponse {
  /**
   * @schema UpdateAvailabilityOptionsResponse#AvailabilityOptions
   */
  readonly availabilityOptions?: AvailabilityOptionsStatus;

}

/**
 * @schema UpdateDomainEndpointOptionsRequest
 */
export interface UpdateDomainEndpointOptionsRequest {
  /**
   * @schema UpdateDomainEndpointOptionsRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema UpdateDomainEndpointOptionsRequest#DomainEndpointOptions
   */
  readonly domainEndpointOptions: DomainEndpointOptions;

}

/**
 * @schema UpdateDomainEndpointOptionsResponse
 */
export interface UpdateDomainEndpointOptionsResponse {
  /**
   * @schema UpdateDomainEndpointOptionsResponse#DomainEndpointOptions
   */
  readonly domainEndpointOptions?: DomainEndpointOptionsStatus;

}

/**
 * @schema UpdateScalingParametersRequest
 */
export interface UpdateScalingParametersRequest {
  /**
   * @schema UpdateScalingParametersRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema UpdateScalingParametersRequest#ScalingParameters
   */
  readonly scalingParameters: ScalingParameters;

}

/**
 * @schema UpdateScalingParametersResponse
 */
export interface UpdateScalingParametersResponse {
  /**
   * @schema UpdateScalingParametersResponse#ScalingParameters
   */
  readonly scalingParameters: ScalingParametersStatus;

}

/**
 * @schema UpdateServiceAccessPoliciesRequest
 */
export interface UpdateServiceAccessPoliciesRequest {
  /**
   * @schema UpdateServiceAccessPoliciesRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema UpdateServiceAccessPoliciesRequest#AccessPolicies
   */
  readonly accessPolicies: string;

}

/**
 * @schema UpdateServiceAccessPoliciesResponse
 */
export interface UpdateServiceAccessPoliciesResponse {
  /**
   * @schema UpdateServiceAccessPoliciesResponse#AccessPolicies
   */
  readonly accessPolicies: AccessPoliciesStatus;

}

/**
 * @schema DomainStatus
 */
export interface DomainStatus {
  /**
   * @schema DomainStatus#DomainId
   */
  readonly domainId: string;

  /**
   * @schema DomainStatus#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DomainStatus#ARN
   */
  readonly arn?: string;

  /**
   * @schema DomainStatus#Created
   */
  readonly created?: boolean;

  /**
   * @schema DomainStatus#Deleted
   */
  readonly deleted?: boolean;

  /**
   * @schema DomainStatus#DocService
   */
  readonly docService?: ServiceEndpoint;

  /**
   * @schema DomainStatus#SearchService
   */
  readonly searchService?: ServiceEndpoint;

  /**
   * @schema DomainStatus#RequiresIndexDocuments
   */
  readonly requiresIndexDocuments: boolean;

  /**
   * @schema DomainStatus#Processing
   */
  readonly processing?: boolean;

  /**
   * @schema DomainStatus#SearchInstanceType
   */
  readonly searchInstanceType?: string;

  /**
   * @schema DomainStatus#SearchPartitionCount
   */
  readonly searchPartitionCount?: number;

  /**
   * @schema DomainStatus#SearchInstanceCount
   */
  readonly searchInstanceCount?: number;

  /**
   * @schema DomainStatus#Limits
   */
  readonly limits?: Limits;

}

/**
 * @schema AnalysisScheme
 */
export interface AnalysisScheme {
  /**
   * @schema AnalysisScheme#AnalysisSchemeName
   */
  readonly analysisSchemeName: string;

  /**
   * @schema AnalysisScheme#AnalysisSchemeLanguage
   */
  readonly analysisSchemeLanguage: string;

  /**
   * @schema AnalysisScheme#AnalysisOptions
   */
  readonly analysisOptions?: AnalysisOptions;

}

/**
 * @schema AnalysisSchemeStatus
 */
export interface AnalysisSchemeStatus {
  /**
   * @schema AnalysisSchemeStatus#Options
   */
  readonly options: AnalysisScheme;

  /**
   * @schema AnalysisSchemeStatus#Status
   */
  readonly status: OptionStatus;

}

/**
 * @schema Expression
 */
export interface Expression {
  /**
   * @schema Expression#ExpressionName
   */
  readonly expressionName: string;

  /**
   * @schema Expression#ExpressionValue
   */
  readonly expressionValue: string;

}

/**
 * @schema ExpressionStatus
 */
export interface ExpressionStatus {
  /**
   * @schema ExpressionStatus#Options
   */
  readonly options: Expression;

  /**
   * @schema ExpressionStatus#Status
   */
  readonly status: OptionStatus;

}

/**
 * @schema IndexField
 */
export interface IndexField {
  /**
   * @schema IndexField#IndexFieldName
   */
  readonly indexFieldName: string;

  /**
   * @schema IndexField#IndexFieldType
   */
  readonly indexFieldType: string;

  /**
   * @schema IndexField#IntOptions
   */
  readonly intOptions?: IntOptions;

  /**
   * @schema IndexField#DoubleOptions
   */
  readonly doubleOptions?: DoubleOptions;

  /**
   * @schema IndexField#LiteralOptions
   */
  readonly literalOptions?: LiteralOptions;

  /**
   * @schema IndexField#TextOptions
   */
  readonly textOptions?: TextOptions;

  /**
   * @schema IndexField#DateOptions
   */
  readonly dateOptions?: DateOptions;

  /**
   * @schema IndexField#LatLonOptions
   */
  readonly latLonOptions?: LatLonOptions;

  /**
   * @schema IndexField#IntArrayOptions
   */
  readonly intArrayOptions?: IntArrayOptions;

  /**
   * @schema IndexField#DoubleArrayOptions
   */
  readonly doubleArrayOptions?: DoubleArrayOptions;

  /**
   * @schema IndexField#LiteralArrayOptions
   */
  readonly literalArrayOptions?: LiteralArrayOptions;

  /**
   * @schema IndexField#TextArrayOptions
   */
  readonly textArrayOptions?: TextArrayOptions;

  /**
   * @schema IndexField#DateArrayOptions
   */
  readonly dateArrayOptions?: DateArrayOptions;

}

/**
 * @schema IndexFieldStatus
 */
export interface IndexFieldStatus {
  /**
   * @schema IndexFieldStatus#Options
   */
  readonly options: IndexField;

  /**
   * @schema IndexFieldStatus#Status
   */
  readonly status: OptionStatus;

}

/**
 * @schema Suggester
 */
export interface Suggester {
  /**
   * @schema Suggester#SuggesterName
   */
  readonly suggesterName: string;

  /**
   * @schema Suggester#DocumentSuggesterOptions
   */
  readonly documentSuggesterOptions: DocumentSuggesterOptions;

}

/**
 * @schema SuggesterStatus
 */
export interface SuggesterStatus {
  /**
   * @schema SuggesterStatus#Options
   */
  readonly options: Suggester;

  /**
   * @schema SuggesterStatus#Status
   */
  readonly status: OptionStatus;

}

/**
 * @schema AvailabilityOptionsStatus
 */
export interface AvailabilityOptionsStatus {
  /**
   * @schema AvailabilityOptionsStatus#Options
   */
  readonly options: boolean;

  /**
   * @schema AvailabilityOptionsStatus#Status
   */
  readonly status: OptionStatus;

}

/**
 * @schema DomainEndpointOptionsStatus
 */
export interface DomainEndpointOptionsStatus {
  /**
   * @schema DomainEndpointOptionsStatus#Options
   */
  readonly options: DomainEndpointOptions;

  /**
   * @schema DomainEndpointOptionsStatus#Status
   */
  readonly status: OptionStatus;

}

/**
 * @schema ScalingParametersStatus
 */
export interface ScalingParametersStatus {
  /**
   * @schema ScalingParametersStatus#Options
   */
  readonly options: ScalingParameters;

  /**
   * @schema ScalingParametersStatus#Status
   */
  readonly status: OptionStatus;

}

/**
 * @schema AccessPoliciesStatus
 */
export interface AccessPoliciesStatus {
  /**
   * @schema AccessPoliciesStatus#Options
   */
  readonly options: string;

  /**
   * @schema AccessPoliciesStatus#Status
   */
  readonly status: OptionStatus;

}

/**
 * @schema DomainEndpointOptions
 */
export interface DomainEndpointOptions {
  /**
   * @schema DomainEndpointOptions#EnforceHTTPS
   */
  readonly enforceHttps?: boolean;

  /**
   * @schema DomainEndpointOptions#TLSSecurityPolicy
   */
  readonly tlsSecurityPolicy?: string;

}

/**
 * @schema ScalingParameters
 */
export interface ScalingParameters {
  /**
   * @schema ScalingParameters#DesiredInstanceType
   */
  readonly desiredInstanceType?: string;

  /**
   * @schema ScalingParameters#DesiredReplicationCount
   */
  readonly desiredReplicationCount?: number;

  /**
   * @schema ScalingParameters#DesiredPartitionCount
   */
  readonly desiredPartitionCount?: number;

}

/**
 * @schema ServiceEndpoint
 */
export interface ServiceEndpoint {
  /**
   * @schema ServiceEndpoint#Endpoint
   */
  readonly endpoint?: string;

}

/**
 * @schema Limits
 */
export interface Limits {
  /**
   * @schema Limits#MaximumReplicationCount
   */
  readonly maximumReplicationCount: number;

  /**
   * @schema Limits#MaximumPartitionCount
   */
  readonly maximumPartitionCount: number;

}

/**
 * @schema AnalysisOptions
 */
export interface AnalysisOptions {
  /**
   * @schema AnalysisOptions#Synonyms
   */
  readonly synonyms?: string;

  /**
   * @schema AnalysisOptions#Stopwords
   */
  readonly stopwords?: string;

  /**
   * @schema AnalysisOptions#StemmingDictionary
   */
  readonly stemmingDictionary?: string;

  /**
   * @schema AnalysisOptions#JapaneseTokenizationDictionary
   */
  readonly japaneseTokenizationDictionary?: string;

  /**
   * @schema AnalysisOptions#AlgorithmicStemming
   */
  readonly algorithmicStemming?: string;

}

/**
 * @schema OptionStatus
 */
export interface OptionStatus {
  /**
   * @schema OptionStatus#CreationDate
   */
  readonly creationDate: string;

  /**
   * @schema OptionStatus#UpdateDate
   */
  readonly updateDate: string;

  /**
   * @schema OptionStatus#UpdateVersion
   */
  readonly updateVersion?: number;

  /**
   * @schema OptionStatus#State
   */
  readonly state: string;

  /**
   * @schema OptionStatus#PendingDeletion
   */
  readonly pendingDeletion?: boolean;

}

/**
 * @schema IntOptions
 */
export interface IntOptions {
  /**
   * @schema IntOptions#DefaultValue
   */
  readonly defaultValue?: number;

  /**
   * @schema IntOptions#SourceField
   */
  readonly sourceField?: string;

  /**
   * @schema IntOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema IntOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema IntOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

  /**
   * @schema IntOptions#SortEnabled
   */
  readonly sortEnabled?: boolean;

}

/**
 * @schema DoubleOptions
 */
export interface DoubleOptions {
  /**
   * @schema DoubleOptions#DefaultValue
   */
  readonly defaultValue?: number;

  /**
   * @schema DoubleOptions#SourceField
   */
  readonly sourceField?: string;

  /**
   * @schema DoubleOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema DoubleOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema DoubleOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

  /**
   * @schema DoubleOptions#SortEnabled
   */
  readonly sortEnabled?: boolean;

}

/**
 * @schema LiteralOptions
 */
export interface LiteralOptions {
  /**
   * @schema LiteralOptions#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema LiteralOptions#SourceField
   */
  readonly sourceField?: string;

  /**
   * @schema LiteralOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema LiteralOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema LiteralOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

  /**
   * @schema LiteralOptions#SortEnabled
   */
  readonly sortEnabled?: boolean;

}

/**
 * @schema TextOptions
 */
export interface TextOptions {
  /**
   * @schema TextOptions#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema TextOptions#SourceField
   */
  readonly sourceField?: string;

  /**
   * @schema TextOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

  /**
   * @schema TextOptions#SortEnabled
   */
  readonly sortEnabled?: boolean;

  /**
   * @schema TextOptions#HighlightEnabled
   */
  readonly highlightEnabled?: boolean;

  /**
   * @schema TextOptions#AnalysisScheme
   */
  readonly analysisScheme?: string;

}

/**
 * @schema DateOptions
 */
export interface DateOptions {
  /**
   * @schema DateOptions#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema DateOptions#SourceField
   */
  readonly sourceField?: string;

  /**
   * @schema DateOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema DateOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema DateOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

  /**
   * @schema DateOptions#SortEnabled
   */
  readonly sortEnabled?: boolean;

}

/**
 * @schema LatLonOptions
 */
export interface LatLonOptions {
  /**
   * @schema LatLonOptions#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema LatLonOptions#SourceField
   */
  readonly sourceField?: string;

  /**
   * @schema LatLonOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema LatLonOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema LatLonOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

  /**
   * @schema LatLonOptions#SortEnabled
   */
  readonly sortEnabled?: boolean;

}

/**
 * @schema IntArrayOptions
 */
export interface IntArrayOptions {
  /**
   * @schema IntArrayOptions#DefaultValue
   */
  readonly defaultValue?: number;

  /**
   * @schema IntArrayOptions#SourceFields
   */
  readonly sourceFields?: string;

  /**
   * @schema IntArrayOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema IntArrayOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema IntArrayOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

}

/**
 * @schema DoubleArrayOptions
 */
export interface DoubleArrayOptions {
  /**
   * @schema DoubleArrayOptions#DefaultValue
   */
  readonly defaultValue?: number;

  /**
   * @schema DoubleArrayOptions#SourceFields
   */
  readonly sourceFields?: string;

  /**
   * @schema DoubleArrayOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema DoubleArrayOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema DoubleArrayOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

}

/**
 * @schema LiteralArrayOptions
 */
export interface LiteralArrayOptions {
  /**
   * @schema LiteralArrayOptions#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema LiteralArrayOptions#SourceFields
   */
  readonly sourceFields?: string;

  /**
   * @schema LiteralArrayOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema LiteralArrayOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema LiteralArrayOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

}

/**
 * @schema TextArrayOptions
 */
export interface TextArrayOptions {
  /**
   * @schema TextArrayOptions#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema TextArrayOptions#SourceFields
   */
  readonly sourceFields?: string;

  /**
   * @schema TextArrayOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

  /**
   * @schema TextArrayOptions#HighlightEnabled
   */
  readonly highlightEnabled?: boolean;

  /**
   * @schema TextArrayOptions#AnalysisScheme
   */
  readonly analysisScheme?: string;

}

/**
 * @schema DateArrayOptions
 */
export interface DateArrayOptions {
  /**
   * @schema DateArrayOptions#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema DateArrayOptions#SourceFields
   */
  readonly sourceFields?: string;

  /**
   * @schema DateArrayOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema DateArrayOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema DateArrayOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

}

/**
 * @schema DocumentSuggesterOptions
 */
export interface DocumentSuggesterOptions {
  /**
   * @schema DocumentSuggesterOptions#SourceField
   */
  readonly sourceField: string;

  /**
   * @schema DocumentSuggesterOptions#FuzzyMatching
   */
  readonly fuzzyMatching?: string;

  /**
   * @schema DocumentSuggesterOptions#SortExpression
   */
  readonly sortExpression?: string;

}
