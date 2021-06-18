import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class TimestreamQueryClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelQuery(input: shapes.TimestreamQueryCancelQueryRequest): TimestreamQueryCancelQuery {
    return new TimestreamQueryCancelQuery(this, 'CancelQuery', this.__resources, input);
  }

  public describeEndpoints(): TimestreamQueryDescribeEndpoints {
    return new TimestreamQueryDescribeEndpoints(this, 'DescribeEndpoints', this.__resources);
  }

  public query(input: shapes.TimestreamQueryQueryRequest): TimestreamQueryQuery {
    return new TimestreamQueryQuery(this, 'Query', this.__resources, input);
  }

}

export class TimestreamQueryCancelQuery extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TimestreamQueryCancelQueryRequest) {
    super(scope, id);
  }

  public get cancellationMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelQuery',
        service: 'TimestreamQuery',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamQuery.CancelQuery.CancellationMessage'),
        outputPath: 'CancellationMessage',
        parameters: {
          QueryId: this.input.queryId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelQuery.CancellationMessage', props);
    return resource.getResponseField('CancellationMessage') as unknown as string;
  }

}

export class TimestreamQueryDescribeEndpoints extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get endpoints(): shapes.TimestreamQueryEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoints',
        service: 'TimestreamQuery',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamQuery.DescribeEndpoints.Endpoints'),
        outputPath: 'Endpoints',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoints.Endpoints', props);
    return resource.getResponseField('Endpoints') as unknown as shapes.TimestreamQueryEndpoint[];
  }

}

export class TimestreamQueryQuery extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TimestreamQueryQueryRequest) {
    super(scope, id);
  }

  public get queryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'TimestreamQuery',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamQuery.Query.QueryId'),
        outputPath: 'QueryId',
        parameters: {
          QueryString: this.input.queryString,
          ClientToken: this.input.clientToken,
          NextToken: this.input.nextToken,
          MaxRows: this.input.maxRows,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Query.QueryId', props);
    return resource.getResponseField('QueryId') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'TimestreamQuery',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamQuery.Query.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          QueryString: this.input.queryString,
          ClientToken: this.input.clientToken,
          NextToken: this.input.nextToken,
          MaxRows: this.input.maxRows,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Query.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get rows(): shapes.TimestreamQueryRow[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'TimestreamQuery',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamQuery.Query.Rows'),
        outputPath: 'Rows',
        parameters: {
          QueryString: this.input.queryString,
          ClientToken: this.input.clientToken,
          NextToken: this.input.nextToken,
          MaxRows: this.input.maxRows,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Query.Rows', props);
    return resource.getResponseField('Rows') as unknown as shapes.TimestreamQueryRow[];
  }

  public get columnInfo(): shapes.TimestreamQueryColumnInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'TimestreamQuery',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamQuery.Query.ColumnInfo'),
        outputPath: 'ColumnInfo',
        parameters: {
          QueryString: this.input.queryString,
          ClientToken: this.input.clientToken,
          NextToken: this.input.nextToken,
          MaxRows: this.input.maxRows,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Query.ColumnInfo', props);
    return resource.getResponseField('ColumnInfo') as unknown as shapes.TimestreamQueryColumnInfo[];
  }

  public get queryStatus(): TimestreamQueryQueryQueryStatus {
    return new TimestreamQueryQueryQueryStatus(this, 'QueryStatus', this.__resources, this.input);
  }

}

export class TimestreamQueryQueryQueryStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TimestreamQueryQueryRequest) {
    super(scope, id);
  }

  public get progressPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'TimestreamQuery',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamQuery.Query.QueryStatus.ProgressPercentage'),
        outputPath: 'QueryStatus.ProgressPercentage',
        parameters: {
          QueryString: this.input.queryString,
          ClientToken: this.input.clientToken,
          NextToken: this.input.nextToken,
          MaxRows: this.input.maxRows,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Query.QueryStatus.ProgressPercentage', props);
    return resource.getResponseField('QueryStatus.ProgressPercentage') as unknown as number;
  }

  public get cumulativeBytesScanned(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'TimestreamQuery',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamQuery.Query.QueryStatus.CumulativeBytesScanned'),
        outputPath: 'QueryStatus.CumulativeBytesScanned',
        parameters: {
          QueryString: this.input.queryString,
          ClientToken: this.input.clientToken,
          NextToken: this.input.nextToken,
          MaxRows: this.input.maxRows,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Query.QueryStatus.CumulativeBytesScanned', props);
    return resource.getResponseField('QueryStatus.CumulativeBytesScanned') as unknown as number;
  }

  public get cumulativeBytesMetered(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'TimestreamQuery',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamQuery.Query.QueryStatus.CumulativeBytesMetered'),
        outputPath: 'QueryStatus.CumulativeBytesMetered',
        parameters: {
          QueryString: this.input.queryString,
          ClientToken: this.input.clientToken,
          NextToken: this.input.nextToken,
          MaxRows: this.input.maxRows,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Query.QueryStatus.CumulativeBytesMetered', props);
    return resource.getResponseField('QueryStatus.CumulativeBytesMetered') as unknown as number;
  }

}

