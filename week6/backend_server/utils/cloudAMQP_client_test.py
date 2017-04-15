from cloudAMQP_client import CloudAMQPClient

# Use your own URL
CLOUDAMQP_URL = "amqp://pqfmhgju:8x2vFcULIi6ACRB9od8sasnOKIO3rQXx@donkey.rmq.cloudamqp.com/pqfmhgju"

TEST_QUEUE_NAME = 'test'

def test_basic():
    client = CloudAMQPClient(CLOUDAMQP_URL, TEST_QUEUE_NAME)

    sentMsg = {'test':'demo'}
    client.sendMessage(sentMsg)
    client.sleep(10)
    receivedMsg = client.getMessage()
    assert sentMsg == receivedMsg
    print 'test_basic passed!'

if __name__ == "__main__":
    test_basic()