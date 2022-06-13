const { Client } = require('@notionhq/client')

function formatData(data) {
    return data.results.map(item => ({
        postId: item.id,
        title: item.properties?.Name?.title[0]?.plain_text,
        createdDate: item.properties?.Created?.created_time,
        tags: item.properties?.Tags?.multi_select?.map(({ id, name}) => ({ id, name}))
    }))
}


exports.handler = async function (event, context) {
    const client = new Client({
        auth: process.env.REACT_APP_NOTION_KEY
    });

    const data = await client.blocks.retrieve({
        parent_id: '3206ff3c-fc23-4170-a6a0-83534d5f1259'
    });

    

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
}
  