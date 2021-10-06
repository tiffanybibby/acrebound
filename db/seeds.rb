# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Owner.destroy_all
Property.destroy_all
Unit.destroy_all

Owner.create!([
  {
    first_name: 'Tiffany', 
    last_name: 'Bibby', 
    email: 'tiffany.bibby@gmail.com', 
    password: '232323*'
  },
  {
    first_name: 'Christina', 
    last_name: 'Dauphin', 
    email: 'cd@email.com', 
    password: '121000'
  },
  {
    first_name: 'Neville', 
    last_name: 'Hall', 
    email: 'nh@email.com', 
    password: '082800'
  }
])

@owners = Owner.all 
puts "#{Owner.count} owners created"


Property.create!([
  {
    nickname: "Parent's Home",
    address: Faker::Address.full_address,
    units: 1,
    img:'https://www.auction.com/blog/wp-content/uploads/2014/12/single-family-homes.jpg',
    sq_ft: 1280,
    price: 400500,
    owner_id: 1
  },
  {
    nickname: "My Condo",
    address: Faker::Address.full_address,
    units: 1,
    img:'https://www.brickunderground.com/sites/default/files/styles/blog_primary_image/public/blog/images/190501Tribeca111MurrayStMAINPIC.jpg',
    sq_ft: 1200,
    price: 385000,
    owner_id: 1
  },
  {
    nickname: "Black Girl Magic",
    address: Faker::Address.full_address,
    units: 50,
    img:'https://res.cloudinary.com/urby-llc/image/upload/f_auto,w_3420/295J-jersey-city-apartment-rental-exterior_lul1tm',
    sq_ft: 1280,
    price: 1000000,
    owner_id: 1
  },
  {
    nickname: "Am I An Adult Yet?",
    address: Faker::Address.full_address,
    units: 1,
    img:'https://i1.wp.com/rei-ink.com/wp-content/uploads/2020/03/evolution-of-single-family-house-space.jpg?w=1080&ssl=1',
    sq_ft: 900,
    price: 300000,
    owner_id: 2
  },
  {
    nickname: "Childhood Home",
    address: Faker::Address.full_address,
    units: 1,
    img:'https://photos.zillowstatic.com/fp/f6b0e9ecc8018e8c0158888eaaabc34b-cc_ft_1536.webp',
    sq_ft: 800,
    price: 255000,
    owner_id: 3
  },
  {
    nickname: "The Hall",
    address: Faker::Address.full_address,
    units: 5,
    img:'https://www.thehouseplanshop.com/userfiles/photos/large/5558832025e21fc6d381b1.jpg',
    sq_ft: 1000,
    price: 906000,
    owner_id: 3
  }
])

@properties = Property.all 
puts "#{Property.count} properties created"


Unit.create!([   
  {
    unit_number: "1",
    beds: 3,
    baths: 2.5,
    sq_ft: 1180,
    monthly_rent: 100,
    occupied: true,
    owner_id: 1,
    property_id: 1
  },
  {
    unit_number: "1",
    beds: 2,
    baths: 2,
    sq_ft: 1200,
    monthly_rent: 2200,
    occupied: true,
    owner_id: 1,
    property_id: 2
  },
  {
    unit_number:  "1",
    beds: 2,
    baths: 1,
    sq_ft: 800,
    monthly_rent: 2800,
    occupied: true,
    owner_id: 2,
    property_id: 4
  },
  {
    unit_number: "1",
    beds: 3,
    baths: 2.5,
    sq_ft: 1180,
    monthly_rent: 2900,
    occupied: true,
    owner_id: 3,
    property_id: 5
  } 
  ])
  
# 101.upto(110) do |i|
#   Unit.create!(
#     unit_number: "#{i}",
#     beds: rand(1..3),
#     baths: if self.beds == 1 then 1 elsif self.beds >= 2 then rand(1..2) end,
#     sq_ft: if self.beds == 1 then 100 elsif self.beds == 2 then 150 elsif self.beds == 3 then 200 end,
#     monthly_rent: if self.beds == 1 then 1800 elsif self.beds == 2 then 2200 elsif self.beds == 3 then 2900 end,
#     occupied: Faker::Boolean.boolean,
#     owner_id: 1,
#     property_id: 3
#   )
# end

# 201.upto(210) do |i|
#   Unit.create!(
#     unit_number: "#{i}",
#     beds: rand(1..3),
#     baths: if self.beds == 1 then 1 elsif self.beds >= 2 then rand(1..2) end,
#     sq_ft: if self.beds == 1 then 100 elsif self.beds == 2 then 150 elsif self.beds == 3 then 200 end,
#     monthly_rent: if self.beds == 1 then 1800 elsif self.beds == 2 then 2200 elsif self.beds == 3 then 2900 end,
#     occupied: Faker::Boolean.boolean,
#     owner_id: 1,
#     property_id: 3
#   )
# end

# 301.upto(310) do |i|
#   Unit.create!(
#     unit_number: "#{i}",
#     beds: rand(1..3),
#     baths: if self.beds == 1 then 1 elsif self.beds >= 2 then rand(1..2) end,
#     sq_ft: if self.beds == 1 then 100 elsif self.beds == 2 then 150 elsif self.beds == 3 then 200 end,
#     monthly_rent: if self.beds == 1 then 1800 elsif self.beds == 2 then 2200 elsif self.beds == 3 then 2900 end,
#     occupied: Faker::Boolean.boolean,
#     owner_id: 1,
#     property_id: 3
#   )
# end

# 401.upto(410) do |i|
#   Unit.create!(
#     unit_number: "#{i}",
#     beds: rand(1..3),
#     baths: if self.beds == 1 then 1 elsif self.beds >= 2 then rand(1..2) end,
#     sq_ft: if self.beds == 1 then 100 elsif self.beds == 2 then 150 elsif self.beds == 3 then 200 end,
#     monthly_rent: if self.beds == 1 then 1800 elsif self.beds == 2 then 2200 elsif self.beds == 3 then 2900 end,
#     occupied: Faker::Boolean.boolean,
#     owner_id: 1,
#     property_id: 3
#   )
# end

# 501.upto(510) do |i|
#   Unit.create!(
#     unit_number: "#{i}",
#     beds: rand(1..3),
#     baths: if self.beds == 1 then 1 elsif self.beds >= 2 then rand(1..2) end,
#     sq_ft: if self.beds == 1 then 100 elsif self.beds == 2 then 150 elsif self.beds == 3 then 200 end,
#     monthly_rent: if self.beds == 1 then 1800 elsif self.beds == 2 then 2200 elsif self.beds == 3 then 2900 end,
#     occupied: Faker::Boolean.boolean,
#     owner_id: 1,
#     property_id: 3
#   )
# end

# 1.upto(5) do |i|
#   Unit.create!(
#     unit_number: "#{i}",
#     beds: rand(0..2),
#     baths: if self.beds == 0 then 1 elsif self.beds == 1 then 1 elsif self.beds == 2 then 2 end,
#     sq_ft: if self.beds == 0 then 90 elsif self.beds == 1 then 110 elsif self.beds == 2 then 130 end,
#     monthly_rent: if self.beds == 0 then 1700 elsif self.beds == 1 then 2000 elsif self.beds == 2 then 2500 end,
#     occupied: Faker::Boolean.boolean,
#     owner_id: 3,
#     property_id: 6
#   )
# end
  
  
  @units = Unit.all 
  puts "#{Unit.count} units created"
  
  