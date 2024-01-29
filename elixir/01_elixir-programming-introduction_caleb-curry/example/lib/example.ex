defmodule Example do
  use Application
  alias UUID

  @x 5

  def start(_type, _args) do
    Example.main 
    Supervisor.start_link [], strategy: :one_for_one
  end

  def main do
    x = 10
    IO.puts @x
    IO.puts x 
    IO.puts :hello

    status =  Enum.random [:gold, :silver, :bronze ]
    case status do
      :gold -> IO.puts "gold"
      :silver -> IO.puts "silver"
      :bronze -> IO.puts "bronze"
      _ -> IO.puts "default"
    end

    IO.puts ?a
  end
end
