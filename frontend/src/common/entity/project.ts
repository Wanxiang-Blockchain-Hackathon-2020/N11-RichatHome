export default class Project {
    name: string = '' //名称
    info: string = '' //描述
    sender_name = '' //string/发包方名称（50字）
    sender_url = '' //string 发包方链接（1000字）:
    admin_addressl = '' //string 管理员地址:
    admin_pubkeyl = '' // 'test:admin_pubkeyl/admin_pubkeyl' //string 管理员公钥:
    verifier_address: Array<string> = [] //list 验证人地址（多个）
    verifier_pubkey: Array<string> = [] //list 验证人公钥（多个）
    point_token_symbol = '' //string 积分代币符号:
    point_token_num = '' //'323' //string 积分数量:
    reward_token_symbol = ''//string 奖励代币符号 :
    reward_token_num = '' //string 奖励币数量 :
    exchange_time = '' //string 兑换周期；
    budget = ''//string 每期预算:
    rate = '' //string 积分兑换价格:
    start_date = '' //string 开始时间:
    end_date = ''//string 结束时间:
    contract = '' //string 合约地址:
}