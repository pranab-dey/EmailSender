const sinon = require('sinon');
const proxyquire = require('proxyquire');
const { expect } = require('chai');

describe('emailQueueProcessor', () => {
  let sendEmailStub, createCustomersStub, emailQueueProcessor;

  beforeEach(() => {
    sendEmailStub = sinon.stub().resolves({ messageId: '12345' });
    createCustomersStub = sinon.stub().resolves(true);

    emailQueueProcessor = proxyquire('../emailQueueProcessor', {
      '../helpers': { sendEmail: sendEmailStub },
      '../services': { createCustomers: createCustomersStub },
    });
  });

  it('should send emails and create customers in the database', async () => {
    const job = {
      id: 'jobId',
      data: [
        {
          enabled: 'true',
          to: 'test@example.com',
          subject: 'Test Email',
          body: 'This is a test email.',
        },
      ],
    };

    const done = sinon.spy();

    await emailQueueProcessor(job, done);

    expect(sendEmailStub.calledOnce).to.be.true;
    expect(createCustomersStub.calledOnce).to.be.true;
    expect(done.calledOnce).to.be.true;
  });

  it('should handle errors and create customers in the database', async () => {
    const job = {
      id: 'jobId',
      data: [
        {
          enabled: 'false',
          to: 'test@example.com',
          subject: 'Test Email',
          body: 'This is a test email.',
        },
      ],
    };

    const done = sinon.spy();

    await emailQueueProcessor(job, done);

    expect(sendEmailStub.notCalled).to.be.true;
    expect(createCustomersStub.calledOnce).to.be.true;
    expect(done.calledOnce).to.be.true;
  });
});
