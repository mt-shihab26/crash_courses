class BankAccount
  attr_reader :balance

  def initialize initail_amount
    @balance = initail_amount
  end

  def diposit amount
    @balance += amount
    log_transaction 'deposit', amount
  end

  def withdraw amount
    if amount > @balance
      log_transaction 'insufficient funds', amount
      return 'Insufficient funds'
    end

    @balance -= amount
    log_transaction 'withdraw', amount
  end

  private

  def log_transaction type, amount
    puts "#{type.capitalize} of #{amount} completed. New balance: #{@balance}"
  end
end

account = BankAccount.new 1000

account.diposit 500
account.withdraw 200
account.withdraw 2000
